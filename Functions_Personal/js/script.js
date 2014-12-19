/**
 * Alana Keay
 * SDI Section #4
 * Function Personal Assignment
 * Created on 12-17-2014
 */

//alert("test test")

// calculate the cost of replacing windows and doors on a house.
// create variables to collect data for windows

var windows = prompt("How many windows would you like to replace on your house? Please type in a number:");
// make sure you validate
while(windows==="" || isNaN(windows)) {
    // Reprompt user
    if (windows === "") {
        min = prompt("Please do not leave blank \n Please type in a amount")
    } else {
        min = prompt("please type in a min number \n Please type in a number:");
    }
}
