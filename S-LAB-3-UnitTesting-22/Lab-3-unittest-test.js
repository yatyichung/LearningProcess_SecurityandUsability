//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE UNIT TEST ==========


function test_checkHumberId(valueIn, expected) {
    "use strict";
    let result = checkHumberId(valueIn);
    let color;
    if (result === expected) {
        result = "==PASSED==";
        color = "green";
    } else {
        result = "xxFAILEDxx";
        color = "red";
    }

    //reference https://www.w3schools.com/jsref/jsref_fontcolor.asp
    let msg = `Value tested: ${valueIn}  Expected result: ${expected}
    ${result.fontcolor(color)}<br>`;

    let dataOut = document.getElementById("data");

    dataOut.innerHTML += msg;

}

//TEST TO PASS WITH KNOWN PASSING VALUE
test_checkHumberId("n12345678", true);
//TEST TO PASS WITH KNOWN PASSING VALUE
test_checkHumberId("N12345678", true);

//TEST TO FAIL WITH KNOWN FAILING VALUE
test_checkHumberId("x49293ASFASDF211", false);
 //TEST TO FAIL WITH KNOWN FAILING VALUE
test_checkHumberId("n1234567", false);
//TEST TO FAIL WITH KNOWN FAILING VALUE
test_checkHumberId("n123456789", false);

//BOUNDARY TESTING
test_checkHumberId("n99999999", true);
//BOUNDARY TESTING
test_checkHumberId("n00000000", true);
//BOUNDARY TESTING
test_checkHumberId("N12345678", true);
//BOUNDARY TESTING
test_checkHumberId("n01492932", true);