/**
 *  Alana Keay
 * SDI section #4
 * Conditional Industry Assignment
 * created on 12-11-2014
 */
//alert("test test")

// create conditional wacky assignment. how many birds does it take to make your house fly

var house = prompt("How much does your house in lbs?")
console.log(house)

var birds = prompt("how many birds do you have?")
console.log(birds)

var friendsBirds = prompts("Does your friends have any birds you can use? If none enter 0.")

// for each lb you need 2 birds
var possibleFlight = house*2

if(possibleFlight<birds )
