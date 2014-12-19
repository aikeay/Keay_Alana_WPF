/**
 * Created by alanakeay on 12/18/14.
 */

//alert ("Test")



// ask the user for a min number
var min = prompt("Let's get a random number between two values.\n {please type in the min valve:");

// validate that the user actually typed in something, so not blank

// older way of doing it
if(min===""){
    //Reprompt the user
    min = prompt("Please type in a min number");
}

//validate using a while loop

//test to see if blank
/*
while(min===""){
    //Reprompt the user
    min = prompt("Please do not leave blank! \nplease type in min:");
}
// vaidate that it is a number using a while loop

while(isNaN(min)){
    //Reprompt the user
    min=prompt("Please only type in numbers \n Please type in a min number:");
}*/

//validate using a combined while loop

while(min==="" || isNaN(min)) {
    if (min === "") { //reprompt the user
        min = prompt("Please do not leave blank \n Please type in a min")
    } else {
        min = prompt("please type in a min number \n Please type in a min value:");
    }
}

// test if the user types in something specific
// example yes or no questions

var userGoodMood = prompt("Are you in a Good mood? \n please answer yes or no:");

while(userGoodMood!="yes" && userGoodMood !="Yes" && userGoodMood != "no" && userGoodMood!= "No"){
    // reprompt
    userGoodMood = prompt("Please type in yes or no !\n Please answer yes or no:");


}
// toLowerCase() - converts a text string to all lower case.
if (userGoodMood==="yes" || userGoodMood==="Yes"){
    console.log("Great!! Glad your in a fabulouse mood!");

}else{
    console.log("Sorry to hear that, maybe you should code more \n That should make you happy!");
}

// ask user for max value
var max = prompt("please type in a maxium value:");

// validate the prompt
while(max==="" || isNaN(max)){
    // reprompt the user
    max = prompt(" Please do not leave blank and only use numbers. \n Please type a max value:")
}


//parameters are used to catch the incoming arguements

function randomizer(minNum,maxNum){

    // in the function
    console.log ("inside the function")

    // use the parameters instead of the main code variables

    //find a random number between 2 values
    //Math.random() * (max value - min value) + min value
    var randomNumber = Math.round(Math.random() * (maxNum-minNum) + Number(minNum));
    //console.log(randomNumber); -do not use console.log inside of a function!!!!
    // use a return value instead
    return randomNumber;

}

// we need a function call to "run" our function
//arguments go in the function call
// what information in our main code does our function need access too.
var results = randomizer(min,max);

console.log("This random number is "+results);