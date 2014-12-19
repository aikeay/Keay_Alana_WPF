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
        windows = prompt("Please do not leave blank \n Please type in a amount")
    } else {
        windows = prompt("please type in a number \n Please type in a number:");
    }
}
// create door variable
var doors = prompt("How many doors would you like to replace? \n Please type in a number:");
// make sure you validate
while(doors==="" ||isNaN(doors)){
    //Reprompt user
    if(doors === ""){
        doors = prompt("Please do not leave blank \n Please type in a amount" )
    }else{
        doors = prompt ("Please type in a number \n Please type in a number: ");
    }

}
//create window price assuming all windows cost the same no matter the size
var windPrice = 500


