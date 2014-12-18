/**
 * Created by alanakeay on 12/17/14.
 */

//alert ("testing testing");

var bowlOfFruit = ["apple","banana","pear","peach","pear","tomato","kiwi","pear"];

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