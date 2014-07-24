/**
 * Created by James Woods
 * Origination Date 7/20/14.
 * Week 3 Conditional Practice
 */

//Conditional Comparison Statement with Temp

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

var estDinnerBill = prompt("How much money are you going to drop at dinner if you get everything you want?")
console.log("estDinnerBill");
var dailyBudget = prompt("What is your daily budget?")

var dinnerBill = 52;
var minHeight= 48;
var wParentHeight=45;

if (dinnerBill>dailyBudget){
    alert("Hit the ride");
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





