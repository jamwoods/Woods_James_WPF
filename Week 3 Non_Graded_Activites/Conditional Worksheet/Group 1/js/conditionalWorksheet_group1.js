/**
 * Created by James Woods
 * Origination Date 7/21/14.
 * Week 3 Conditional Worksheet-Group 1
 */

//Last Chance for Gas-The formula to determine if they can make it is percent of gas left * tank capacity * MPG

//Gas tank gauge reading
var percentLeft =  prompt("How much gas is left in your tank? Enter a whole number that represents the remaining percentage, " +
"e.g. 25, 50 75.","0"); //User inputs the percentage of gas left in the tank
console.log(percentLeft);

var percentLeftCal = percentLeft/100//Need to convert this to a percentage.
console.log(percentLeftCal);

//Gas mileage
var mpgPrompt =  prompt("Please enter your cars gas mileage.","0"); //User inputs gas mileage
var mpg = parseInt(mpgPrompt); //Return user selection as a number just in case they decide to get super precise
console.log(mpg);

//Gas tank capacity
var tankCapacity =  prompt("How many gallons of gas does your tank hold?","0"); //User inputs size of the gas tank
console.log(tankCapacity);

//Number of miles you can travel
var milesLeft = percentLeftCal * tankCapacity*mpg//The final calculation to determine if they can make it the next 200 miles
console.log(tankCapacity);

if (milesLeft >= 200){//If the miles left to travel from the milesLeft calculation is greater than or equal to 200
    alert("Yes,you can make it without stopping for gas!")//let them know they are good to go
}else{
    alert("You only have" + " " + (percentLeftCal) + " " + "gallons of gas in your tank, better get gas now while you can!")//If the miles left are less than 200 warn them
};

