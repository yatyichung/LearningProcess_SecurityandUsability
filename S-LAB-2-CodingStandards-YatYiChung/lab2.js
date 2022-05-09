"use strict";
window.onload = function () {
    //get access to form and assign it as a variable
    const formHandle = document.forms.myform;

    //when submitting a form
    formHandle.onsubmit = processForm;

    //exectue the codes inside when for is submitted
    function processForm() {
        /*get access to the username and password
        inside of the form and assign it as a variable*/
        const userName = formHandle.username;
        const password = formHandle.password;

        /*if input for username is empty or null, the inside code will execute:
         *1) focus on the input
         *2) add a class to the element, the class will
             change the backgroun-color to red
         *3) do not submit the form*/
        if (userName.value === "" || userName.value === null) {
            userName.focus();
            userName.classList.add("red");
            return false;
        }

        /*if input for password is empty or null, the inside code will execute:
         *1) focus on the input
         *2) add a class to the element,
             the class will change the backgroun-color to red
         *3) do not submit the form*/
        if (password.value === "" || password.value === null) {
            password.focus();
            password.classList.add("red");
            return false;
        }

        //When the form is submitted sucessfully, these code will execute
        //make the output box appear
        document.querySelector(".output").style.display = "block";
        //place the user's input inside of the class
        document.querySelector(".output_username").innerHTML = userName.value;
        //place the user's input inside of the class
        document.querySelector(".output_password").innerHTML = password.value;
        //reset the username value to an empty string
        userName.value = "";
        /*remove the class from username,
        so the background-color is not red anymore*/
        userName.classList.remove("red");
        //reset the password value to an empty string
        password.value = "";
        /*remove the class from password,
        so the background-color is not red anymore*/
        password.classList.remove("red");
        //remain the same page
        return false;
    }

};