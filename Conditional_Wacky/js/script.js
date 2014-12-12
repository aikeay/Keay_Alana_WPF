/**
 *  Alana Keay
 * SDI section #4
 * Conditional Industry Assignment
 * created on 12-11-2014
 */
//alert("test test")

// create conditional wacky assignment. how many birds does it take to make your house fly
//create variables
var house = prompt("How much does your house in lbs?");
console.log(house);
var birds = prompt("how many birds do you have?");
console.log(birds);
var friendsBirds = prompt("Does your friends have any birds you can use? If none enter 0.");
console.log(friendsBirds);

// for each lb you need 2 birds
var possibleFlight = house*2

//create a calculation for finding out if you house can fly
if(possibleFlight<birds || possibleFlight<friendsBirds){
    //code if true
    console.log("You can make your house fly!");
}else{
    //code if false
    console.log("You need to get more birds.");
}