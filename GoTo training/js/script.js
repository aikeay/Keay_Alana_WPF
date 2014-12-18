/**
 * Created by alanakeay on 12/17/14.
 */

//alert ("testing testing");

var bowlOfFruit = ["apple","apple","banana","pear","peach","pear","tomato","kiwi","pear","banana", "pear"];

// console.log the whole array
console.log(bowlOfFruit);

// how can i get one fruit inside the bowl
console.log(bowlOfFruit[1]);

// how many fruits are in the bowl?
// how many items are in the array?
// Length of the array
//Dot Syntax -- "use a period!"
console.log(bowlOfFruit.length);

//What is the last index number of the array using the length property
//Last index is Always one less than the length
// bowlOfFruit.Length - 1 --- is the last index #

// create a variable to track the number of pears we have
var totalNumPears = 0;

//Test each item and see if it is a pear

//if(condition to test){code to run if true}

if(bowlOfFruit[0]=== "pear"){
    //this will run if true
    //add one to our counting variable
    console.log("This fruit is a pear!");
    totalNumPears++;
}else{
    //This code will run it the statement is False!!
    console.log("This fruit is not a pear!");
}
if(bowlOfFruit[1]=== "pear"){
    //this will run if true
    //add one to our counting variable
    console.log("This fruit is a pear!");
    totalNumPears++;
}else{
    //This code will run it the statement is False!!
    console.log("This fruit is not a pear!");
}
if(bowlOfFruit[2]=== "pear"){
    //this will run if true
    //add one to our counting variable
    console.log("This fruit is a pear!");
    totalNumPears++;
}else{
    //This code will run it the statement is False!!
    console.log("This fruit is not a pear!");
}
if(bowlOfFruit[3]=== "pear"){
    //this will run if true
    //add one to our counting variable
    console.log("This fruit is a pear!");
    totalNumPears++;
}else{
    //This code will run it the statement is False!!
    console.log("This fruit is not a pear!");
}
//Report out how many pears we have
console.log("There are "+totalNumPears+" number of pears in the bowl.");

// we want the computer to do the "heavy lifting" for us

// create a new tracking variable for pears
var pearNumber=0

// create a loop for repetitive code


//For Loop - is great for when you know how many times it should run
// for(initialize a counting variable; condition to test; incremental change)
// {code to run each loop around}

for(var i=0;i<bowlOfFruit.length;i++){
    console.log ("inside of the loop " +i);
    console.log(bowlOfFruit[i]);

    //Test each fruit if it is a pear
    if(bowlOfFruit[i]==="pear"){
        //add to our pear total
        pearNumber++;
        console.log("This is a pear");

    }else{
        console.log("This fruit is NOT a pear!")
    }

}

console.log("Total number of pears inside the bowl is "+pearNumber+"")


//using conditional to validate prompts

// ask the user to input
var userInput = prompt("What is your name?")

//how do i test if the user left it blank?
if (userInput=== ""){
    //The user left it blank

    //Re-prompt the user
    userInput=prompt("Please do not leave blank, what is your name?");

}
console.log("Welcome "+userInput);

// Test if user types in a number?
//isNaN() - Is Not A Number

console.log(isNaN("test"));
console.log(isNaN(7));

var usernumber = prompt("type in any number");
if(isNaN(usernumber)){
    //This is a text string
    //reprompt the user for a number
    usernumber= prompt("Only type in a number")

}
