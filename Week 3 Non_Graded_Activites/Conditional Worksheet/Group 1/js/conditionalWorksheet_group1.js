/**
 * Created by James Woods
 * Origination Date 7/21/14.
 * Week 3 Conditional Worksheet-Group 1
 */

/*Last Chance for Gas
Given:
Gas efficiency of the car (in mpg)
Gauge reading of the gas tank (in %)
Car’s gas tank capacity (in gallons)
[JW]-The question really is, can you make it the next 200 miles. The formula for the calculation is amount of gas left, e.g.(25, 50, 75%)
translated into gallons / mpg. if I have 50% left and I have a 12 gallon tank then I have 6 gallons. if I get 32 MPG then I can go 32*6 Miles.
So the formula is:

(.50 * 12)*32

Result To Print Out:
“Yes, you can make it without stopping for gas!” or “You only have X gallons of gas in your tank, better get gas now while you can!”*/

//Gas tank gauge reading
var percentLeft =  prompt("How much gas do you have left? Enter a whole number that represents the remaining percentage, e.g. 25, 50 75.","0"); //User inputs gas mileage
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
var milesLeft = percentLeftCal * tankCapacity/mpg
alert (milesLeft)


var totalYearlyCost = parseFloat(trueMTW/mpg * pricePerGallon + vacationMiles/mpg * pricePerGallon + weekendMiles/mpg * pricePerGallon).toFixed(2);
console.log(totalYearlyCost); //Calculating total yearly cost so last statement for the alert is easier to manage. Could also have calculated the other three statement and place in separate variable but did not want to.

alert("Your yearly cost for gas consists of" + " " +  "$" + (trueMTW/mpg * pricePerGallon).toFixed(2) + " " +  "for your work commute," + " " + "$" + (vacationMiles/mpg* pricePerGallon).toFixed(2) + " " + "for your vacation commute and" + " " + "$" + (weekendMiles/mpg * pricePerGallon).toFixed(2) + " " +  "for you weekend miles for a total yearly cost of" + " " + "$" + (totalYearlyCost));



//Populated value in var determines whether the subsequent argument will execute.
var temp = 82;
if (temp>70) {goToTheBeach();
}

var temp = 82;//In this scenario, you are trying to compare values and look for an exact match
if (temp==70) {goToTheBeach();
}

//Nested Conditional

if (sunny){
    goToTheBeach();

    if (warmWater){
    wearNewSuit();
}

}else{
    {
        goToTheMovies();
    }

var oldEnough=true;

//if the child is old enough, print to the console, "You can ride!"
if(oldEnough){
    //code to be performed if condition is true
    console.log("You can ride the coaster!");
}

//Relational Expressions-Check the relationship between 2 variables or values

var kidHeight = 30;
var minHeight= 48;

//If over 48"
if (kidHeight>minHeight){
}


console.log("You can ride the coaster!");

    if (kidHeight +2 > minHeight){//sneaker lift. Can also declare a variable value and add the two variables together

    }

    var kidHeight = 30;
    var minHeight= 48;
    var sneakerLift=2;

    if (kidHeight + sneakerLift > minHeight){//sneaker lift. Can also declare a variable value and add the two variables together
    }
//if and else

    var kidHeight = 30;
    var minHeight= 48;

//If under 48"
    if (kidHeight<minHeight){
    }
    console.log("Need to put on a few inches")
//But what if neither condition is met? Use the less than or equal to operator
    if (kidHeight<=minHeight){
    }
//Alternative method that combines both with an else

if (kidHeight>minHeight){
}else}//removes the need for another relational operator
    console.log("Need to put on a few inches");
}

//else if chain. Choosing between three blocks of code

var kidHeight = 52;
var minHeight= 48;
var wParentHeight=45;

if (kidHeight>minHeight){
    console.log("Hit the ride");
}else if(kidHeight>wParentHeight) {
    console.log("You can ride with a parent");
}else{
    console.log("Need o grow a little");
}

//Logical operators

//&& and requires that both boolean values be true

var budget = 300
var iPhonePrice = 199.99
var paycheck = 200;
var wonLottery = true;

if(iPhonePrice < budget && paycheck > 300 ) {//and operators only goes between Booleans
    console.log("We can buy the phone")
}else{
    console.log("We can buy the phone")

}

//Or operator ||

var budget = 100
var iPhonePrice = 199.99
var paycheck = 200;
var wonLottery = true;

if(iPhonePrice < budget || wonLottery) {//and operators only goes between Booleans
    console.log("We can buy the phone")
}else{
    console.log("We can buy the phone")

}
//Exclusive OR Xor. Only one of those things can be true.Either on but not both. If both are true it resolved to false
//Not Operator-Negation-true becomes false, false becomes true
//a!=b same as !(a===b)
//a<b is the same as !(a<b)
//COMMON MISCONCEPTIONS
//a===b===c is not correct for equality. Should be a===b && b===c. This is because the first expression if the wrong example resolves
//to true. You end up saying true = c. In case of the latter, if both are true the whole thing is true.
//Relational operators go in between pairs of objects
//Logical operators go in between Relational Expressions or Boolean values
//Always work in pairs, never three items at once

//Ternary operators-one line if else statement that requires 3 components

/*if(condition){
    do if true;
}else{
    do if false;
}

//OR

(condition) ? do if true : do if false;


var gpa = 4.8;
if(gpa>2.0) {
    console.log("Congrats");
}else{
    console.log("Congrats");
}*/

//OR you could use a ternary

(gpa > 2.0) ? console.log("Congrats") : console.log("So sorry Charlie")

//Real benefit is its ability to return values

var age = 11;
var book;

//If child under 10 they get book A otherwise they get B

if(age<10){
    book="A";
}else{
    book = "B";
}

console.log(book);

//Using Ternary-It is really a choice to use ternary's or conditionals. Really large blocks of codes are better suited for traditional conditionals

book = (age<10) ? "A" : "B"
console.log(book);





