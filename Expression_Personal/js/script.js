/*
 * Alana Keay
 * SDI Section #04
 * Expression Personal Assignment
 * 12-3-2014
 */

//alert("test test.");

// create personal calculator which is how many gallons of milk do you go through in a year

// ask the user their name
var name = prompt("Please type in your name?");

//use variable and inform user what we are going to figure out
alert("welcome "+name+"! + Let's figure how many gallons of milk you go through in a year.");

// ask how many gallons of milk you go through in a month
var month = prompt("How many gallons of milk do you normally drink in a month?");

//Console.log to check that there is something entered
console.log(month);

// Calculate the number of gallons of milk you go through

// calculate the number drank in a 12 months
var year = 12

var milkDrank = month*year

alert("You drink "+milkDrank+" gallons of milk in one year.");

//a little more complex
// calculate the number of gallons of milk you could drink if you continued drinking your normal monthly quota over a number of years
var futureMilk = prompt("I can tell you how many gallons of milk you will drink over the years if you continue with the same path you are now. How many years do you want to know about? ");

console.log(futureMilk)

var futureDrank = milkDrank*Number(futureMilk);
console.log(futureDrank)

alert("You will drink a "+futureDrank+" gallons of milk over the next "+futureMilk+" years.");