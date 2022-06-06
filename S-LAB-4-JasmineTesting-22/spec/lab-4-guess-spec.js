//TESTING WITH JASMINE
describe("Guess Number Function", function() {

    describe("Functional Specifications", function(){
         //Test when correct number is entered 
        it("Should return true boolean when input is 4.", function() {
            expect(guessNum(4)).toEqual(true);
        });

        //Test when a number between 1 to 10 is entered
        it("Shouldn return false boolean for inputing number between 1 to 10 (exclude 4).", function() {
            expect(guessNum(1)).toEqual(false);
        });

        //Test when not a number is entered
        it("Shouldn return false boolean when input is not a number.", function() {
            expect(guessNum("a")).toEqual(false);
        });

        //Test when an empty string is entered
        it("Shouldn return false boolean when input is an empty string.", function() {
            expect(guessNum("")).toEqual(false);
        });

        //Test when a number outside of 1 to 10 is entered
        it("Should return false boolean when input is below 1 or above 10.", function() {
            expect(guessNum(100)).toEqual(false);
        });
    })
   
    //Test to pass
    describe("Test to PASS",function(){
        it("Should return true boolean for number 4.", function() {
            expect(guessNum(4)).toEqual(true);
        });
        it("Should return true boolean for number 4.0 .", function(){
            expect(guessNum(4.0)).toEqual(true);
        });
    })//end test to pass

    describe("Test to FAIL", function(){
        it("Should return false boolean when input is null.",function(){
            expect(guessNum()).toEqual(false);
        });
        it("Should return false boolean when input is an empty string.",function(){
            expect(guessNum("")).toEqual(false);
        });
        it("Should return false boolean when input is letter.",function(){
            expect(guessNum("abc")).toEqual(false);
        });
    });//end test to fail

    describe("Boundary Tests", function(){
        it("Should return false boolean for number smaller than 4.", function(){
            expect(guessNum(3)).toEqual(false);
        });
        it("Should return true boolean for number 4.", function(){
            expect(guessNum(4)).toEqual(true);
        });
        it("Should return true boolean for the string '4'.", function(){
            expect(guessNum("4")).toEqual(true);
        });
        it("Should return false boolean for number larger than 4.", function(){
            expect(guessNum(5)).toEqual(false);
        });
        it("Should return false boolean for number 44.", function(){
            expect(guessNum(44)).toEqual(false);
        });
        it("Should return false boolean for the string 'four'.", function(){
            expect(guessNum('four')).toEqual(false);
        });
    });//end boundary tests
});