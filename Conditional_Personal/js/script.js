/**
 * Alana Keay
 * SDI section #4
 * Conditional Personal Assignment
 * Created on 12-11-2014
 */
alert("test test");

// Finding out if I can fly home for the holidays.

var flight = prompt("How much does it cost to fly home?");
console.log(flight);

var money = prompt("How much money do you have to pay for the flight?");
console.log(money);

// if flight is greater then money then no visit home, if flight is less then you get to visit your family.
if(money > flight){
    // code performed if true
    console.log("You get to go home!");
}else{
    console.log("Sorry, maybe next year you can go home!")}