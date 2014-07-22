/**
 * Created by James Woods
 * Origination Date 7/21/14.
 * Week 3 Conditional Worksheet-Group 1
 */

//Last Chance for Gas

//Gas tank gauge reading
var percentLeft =  prompt("How much gas is left in your tank? Enter a whole number that represents the remaining percentage, e.g. 25, 50 75.","0"); //User inputs gas mileage
console.log(percentLeft);

var percentLeftCal = percentLeft/100
console.log(percentLeftCal);

//Gas mileage
var mpgPrompt =  prompt("Please enter your cars gas mileage.","0"); //User inputs gas mileage
var mpg = parseInt(mpgPrompt); //Return user selection as a number
console.log(mpg);

//Gas tank capacity
var tankCapacity =  prompt("How many gallons of gas does your tank hold?","0"); //User inputs gas mileage
console.log(tankCapacity);

//Number of miles you can travel
var milesLeft = percentLeftCal * tankCapacity*mpg
console.log(tankCapacity);

if (milesLeft >= 200){
    alert("Yes,you can make it without stopping for gas!")
}else{
    alert("You only have" + " " + (percentLeftCal) + " " + "gallons of gas in your tank, better get gas now while you can!")
};

