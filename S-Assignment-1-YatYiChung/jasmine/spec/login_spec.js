//TESTING checkLogin FUNCTION WITH JASMINE
describe("Test checkLogin Function", function(){
    
    describe("checkLogin Test to Pass", function(){

        it("should return boolean true when input values match the preset values.",function(){
            var userNameIn = "Sunny";
            var passwordIn = "Ab1234567890"
            expect(checkLogin(userNameIn,passwordIn)).toEqual(true);
        });
    });//end test to pass

    describe("checkLogin Test to Fail", function(){

        it("should return string 'No username entered.' when username input is an empty string", function (){
            var userNameIn = "";
            var passwordIn = "Ab1234567890"
            expect(checkLogin(userNameIn,passwordIn)).toEqual("No username entered.");
        });

        it("should return string 'No password entered.' when username input is an empty string", function (){
            var userNameIn = "Sunny";
            var passwordIn = ""
            expect(checkLogin(userNameIn,passwordIn)).toEqual("No password entered.");
        });

        it("should return string 'Invalid Username or Password.' when either input value is wrong.", function (){
            var userNameIn = "Sun";
            var passwordIn = "Ab1234567890"
            expect(checkLogin(userNameIn,passwordIn)).toEqual("Invalid Username or Password.");
        });

    });//end test to fail


});//END TESTING checkLogin FUNCTION



//TESTING md5Encrypt FUNCTION WITH JASMINE
describe("Test md5Encrypt Function", function(){
    describe("md5Encrypt Test to Pass", function(){
     
        it("should return a 32 character Hexidecimal string", function(){
            const re = /^[a-z0-9]{32}$/;
            var stringIn = "Sunny";
            expect(md5Encrypt(stringIn)).toMatch(re);
            console.log(md5Encrypt(stringIn)); //test to see if the varaible becomes encrypt string.
        });
    });//end test to pass

    /* Since the regex is now set to only 30 characters,
    *  the encrupted input values does not match the regex.
    *  I have used .not.toMatch instead of .toMatch in order to pass the jasmine testing
    * */
    describe("md5Encrypt Test to Fail", function(){
        it("should not return a 30 character Hexidecimal string", function(){
            const re = /^[a-z0-9]{30}$/;
            var stringIn = "Sunny";
            expect(md5Encrypt(stringIn)).not.toMatch(re);
        });
        it("should not return a 32 character Hexidecimal string with any capital letters", function(){
            const re = /^[a-z]{32}$/;
            var stringIn = "Hello";
            expect(md5Encrypt(stringIn)).not.toMatch(re);
        });
        it("should not return a 32 character Hexidecimal string with only letters", function(){
            const re = /^[A-Z0-9]{32}$/;
            var stringIn = "Hello";
            expect(md5Encrypt(stringIn)).not.toMatch(re);
        });
        it("should not return a 32 character Hexidecimal string with only numbers", function(){
            const re = /^[0-9]{32}$/;
            var stringIn = "Hello";
            expect(md5Encrypt(stringIn)).not.toMatch(re);
        });
    });//end test to fail

});

