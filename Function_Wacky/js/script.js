/**
 * Alana Keay
 * SDI Section #4
 * Function Wacky Assignment
 * Created on 12-17-2014
 */

//alert("Test")

// create a calculator that you can use to figure out how many dogs you will need as transport

//create weight variable
var weight = prompt("Please type in your weight in lbs")
while(weight==="" || isNaN(weight)){
    // reprompt the user
    weight = prompt(" Please do not leave blank and only use numbers. \n Please type a weight:")
}
    console.log(weight)
//create the variable for how many lbs dogs can pull because dogs never get tired
var dogsPull = Number(2)

var dogsNeed = function(weight, dogsPull ){
  var dogs = Math.round(weight/dogsPull)
    return dogs
}

var transport = dogsNeed()
console.log(transport)
