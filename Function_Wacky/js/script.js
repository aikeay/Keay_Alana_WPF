/**
 * Alana Keay
 * SDI Section #4
 * Function Wacky Assignment
 * Created on 12-17-2014
 */

//alert("Test")

// create a calculator that you can use to figure out how many dogs you will need as transport
//create variable for distance
var distance = prompt("How many miles do you want to travel?")
while(distance==="" || isNaN(distance)){
    // reprompt the user
    distance = prompt(" Please do not leave blank and only use numbers. \n Please type a distance:")
}
    console.log(distance)
//create weight variable
var weight = prompt("Please type in your weight in lbs")
while(weight==="" || isNaN(weight)){
    // reprompt the user
    weight = prompt(" Please do not leave blank and only use numbers. \n Please type a weight:")
}
//create the variable for how many lbs dogs can pull
var dogsPull = 2
function 