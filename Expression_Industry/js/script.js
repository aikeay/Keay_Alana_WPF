/*
 *Alana Keay
 * SDI Section #04
 * Expression Industry Assignment
 * 12-3-2014*/

//alert("test test");

// create a calculator which is how many hours a month you spend on the computer.

// ask user for their name
var name = prompt("What is your name?");

alert("Hello "+name+". Now let's figure out how many hours on average do you spend on the computer a month.");

// create variable to hold information that is requested
var weekly = prompt("How many hours do you think you spend at your computer weekly?");

//check to make sure the information is in the console log
console.log (weekly);

//calculate the number hours spent

// set variable month
var month = 4;

//calculate the hours spent every month
var monthlyHours = month*weekly;

alert("You spend an average of "+monthlyHours+" hours on your computer every month.");

//calculate how many weeks are in a year
var yearWeeks = 52.1775;
var yearly = yearWeeks*weekly;

alert ("You spend "+yearly+" hours on your computer a year.");
console.log (yearly);

//calculate the number of hours spent on your come if you continue down this same path
var future = prompt("How many years in the future do you want to know about?");
console.log (future);

// now do the math
var futureHours = future*yearly;

alert("If you continue with the same hours spend on your computer as you do now. You will spend "+futureHours+" on your computer over the next "+future+" years.");



