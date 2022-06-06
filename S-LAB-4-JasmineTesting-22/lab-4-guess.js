//Lab 4 Testing With Jasmine
function guessNum(guess) {
    "use strict";
    var secretGuess = 4;//set value of correct number

//Output messages
    var returnMessage = "";
    var noNumber = "A number was not input.";
    var noInput = "A value was not entered.";
    var outOfRange = "Way off! Pick between 1 and 10.";
    var correct = "You guessed it!";
    var validIncorrect = "Guess again.";

    var boolean; //ADDED

// Validate input and assign a return message
    if (isNaN(guess) === true) {
        returnMessage = noNumber;
        boolean = false; //ADDED
    } else if (guess === "") {
        returnMessage = noInput;
        boolean = false;//ADDED
    } else if (guess <= 1 || guess >= 10) {
        returnMessage = outOfRange;
        boolean = false;//ADDED
    } else {
        if (parseInt(guess) === secretGuess) {
            returnMessage = correct;
            boolean = true;//ADDED
        } else {
            returnMessage = validIncorrect;
            boolean = false;//ADDED
        }
    }

    //return returnMessage
    console.log(returnMessage);//ADDED
    return boolean;//CHANGED
};

//FIX THE NUMBER GUESSER - Yat Yi Chung (Sunny), June 1st, 2022
/* First, I have created an empty variable called 'boolean'.
Inside of each if else statement, I have assign a true/false the boolean according to what answer I'd like to recieve.
Since there is only one secretNumber, I have only assign TRUE boolean to when guess === secretGuess in line 27, and the rest would be FALSE.

Then, instead of returning the returnMessage, I have decided to console.log the returnMessage and return boolean. So I can simply 
use true/false in the spec file to compare.*/