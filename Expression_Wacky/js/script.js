/*
*Alana Keay
* SDI Section # 4
* Expression Wacky Assignment
* 12-4-2014
 */

//alert("making sure that js is connected!!");

// create a calculator that can calculate the number of monsters you could fix in your room

// ask user for their name
var name = prompt("What is your name?");
console.log (name);
alert("Hello "+name+"! Where are going to find out how many monsters that you could fit in your closet but first we are going to be some information.");

// set up some variables
var length = prompt("How long is your closet in ft?");
console.log (length);
var width = prompt("How wide is your closet in ft?");
console.log (width);
var hieght = prompt("How tall is your closet in ft?");
console.log (hieght);

// calculate the closet size
var closets = length*width*hieght;
alert("Your closet is "+closets+"sqft.");

alert("Our records show that we are out of shock on all monsters but the purple poka doted monsters. Our purple monster are the compacted monsters which only take up 2 sqft");

var monster = 2
var max = closets/monster

alert("You could have as many as "+max+" monsters in your closet. They loved to be stacked.");

var order = prompt("How many monsters would you like to order?");
console.log (order)

alert("Your "+order+" monsters are on their way to your closet you should be expect them by midnight. You will know they have arrived when you heard a bump noise coming from your closet.");