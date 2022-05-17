//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE checkHumbrId FUNCTION ==========

/** checkHumbrId Function
 * Validate input as a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 */

 function checkHumberId(idIn) {
    "use strict";
    /*regular expression compose of the letter N or n follow by 8 numbers*/
    const re = /^[Nn][0-9]{8}$/;
    let isIdValid = false;

    //if the input id matches the regular expression, isIdValid is true
    if (idIn.match(re)) {
        isIdValid = true;
    }

    return isIdValid;
}
