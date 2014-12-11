/**
 * Alana Keay
 * SDI section #4
 * Conditional Industry Assignment
 * created on 12-11-2014
 */

//alert("test test");

// created the conditional that calculates if you make enough to cover your cost of living

var career = prompt("How much do you make a month creating websites?");
console.log(career);

var monthly = prompt("How much is your cost of living?")
console.log(monthly);

//roommate spits costs with you
var roommate = prompt("How much does your roommates to help you cover your bills if no roommates enter 0?")
console.log(roommate);

// does you career bring in enough more to cover your monthly bills
(roommate+career > monthly)? console.log("You make enough to cover your cost of living!") : console.log("You need to get another job or kick up it on your creation of websites.");

//creating webites is part of my industry