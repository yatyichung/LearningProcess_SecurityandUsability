window.onload = function () {
    //get access to form and assign it as a variable
    const formHandle = document.forms.myform;

    //when submitting a form
    formHandle.onsubmit = processForm;

    //exectue the codes inside when for is submitted
    function processForm() {
        
        //grad username and password from form and set it as a new variable.
        var userNameIn = formHandle.username;
        var passwordIn = formHandle.password;

        var userNameInValue = userNameIn.value;
        var passwordInValue = passwordIn.value;

        //make output box appear when form is submitted (both sucessfull and unsucessfull)
        document.querySelector(".output").style.display = "block"
        //if the checkLogin's result equal to true **meaning the username and password matches the preset values**
        if (checkLogin(userNameInValue,passwordInValue) == true){
            
            document.querySelector(".output_message").innerHTML = "Welcome Back!";
            document.querySelector(".output_message").style.color = "green";
            //console log the encrypted username      
            console.log("Encrypted username:" + md5Encrypt(userNameInValue));
            //console log the encrypted password
            console.log("Encrypted password:" + md5Encrypt(passwordInValue)); 
            userNameIn.value = "";
            passwordIn.value = "";
        } else {
            //display the error messages according to what type of error it is
            document.querySelector(".output_message").innerHTML =  checkLogin(userNameInValue,passwordInValue);
            document.querySelector(".output_message").style.color = "red";
        }

       //remain the same page when form submitted sucessfully
        return false;
        
    }
  

};

// ====== CORRECT USERNAME AND PASSWORD ======
// var userName = "Sunny";
// var password = "Ab1234567890";