/**
 * Alana Keay
 * SDI section #4
 * Conditional Personal Assignment
 * Created on 12-11-2014
 */
//alert("test test");

// Finding out if I can fly home for the holidays.

var flight = prompt("How much does it cost to fly home?");
console.log(flight);

var money = prompt("How much money do you have to pay for the flight?");
console.log(money);

var bonusMoney = prompt("Did you get a holiday bonus check?");
console.log(bonusMoney);

// if flight is greater then money then no visit home, if flight is less then you get to visit your family.
if(money > flight){
    //code performed if true
    console.log("You get to go home for the holidays!");
}else if(bonusMoney+money>=flight){
    //if your bonus check plus extra money is greater then flight cost
    console.log("You get to go home for the holidays to visit family!")
}else{
   //code performed if false
    console.log("Sorry, maybe next year you can go home!")};
