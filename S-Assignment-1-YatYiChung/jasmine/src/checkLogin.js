//======== checkLogin Function ==========

/** checkLogin Function
 * validate input (userNameIn and passwordIn) if they match the preset values
 * Returns true if inputs are valid.
 * Returns string accordingly if inputs are invalid.
 * @param {string} userNameIn
 * @param {string} passwordIn
 */

function checkLogin(userNameIn,passwordIn){
    //preset values for userName and password
    var userName = "Sunny";
    var password = "Ab1234567890";

    var result;
    
    //if userNameIn AND passwordIn match the preset values, return boolean -> ( result = true)
    if(userNameIn === userName && passwordIn === password){
        result = true;
    }
    //if userName is an empty string, return string -> ( result = "No username entered.")
    else if (userNameIn === "" || userNameIn === null){
        result = "No username entered.";
    }
    //if password is an empty string, return string -> ( result = "No password entered.")
    else if (passwordIn === "" || passwordIn === null){
        result = "No password entered.";
    }
     //if userName OR password does not match or is invalid, return string -> ( result = "Invalid Username or Password.")
     else if (userNameIn !== userName || passwordIn !== password){
        result = "Invalid Username or Password.";
    }
    //for all others ***in case missing anything***, return string -> (result = "Something is wrong.")
    else {
        result = "Something is wrong.";
    }

    return result;
}

//testing function
// console.log(checkLogin("Sunny","Ab1234567890"));