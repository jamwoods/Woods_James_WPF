/**
 * Created by James Woods
 * Origination Date 7/30/14.
 * Graded Assignment_Functions_Personal
 */


/*Use a function as part of your code in each sub-project. This function should have at least two parameters and return a value.


 Each of the following requirements must exist in at least one of the 3 subprojects:

 A ternary
 An anonymous function
 A normal "named" function
 An expression with two arithmetic operators
 At least one logical operator
 */
//Calculating total cost for training delivery



var weight =  prompt("How much does Bella weight?"); //User is prompted for weight of the dog
if (weight === ""){
    weight = prompt("How much does Bella weight? Do not leave blank.","0");//Re-prompting if no value is entered
}

var dogFood= function(weight,serving){
    if(weight >= 40){
        var serving = (1-1*.25);//10% off list
    }else if(weight >=35 || weight<=39) {
        var serving = (1);//20% off list
    }else if(weight < 35 ) {
        var serving = (1 + 1*.25);//20% off list
    }else{
        alert("Take your dog to the vet!")
    }

}

dogFood();


/*var calcArea= function(width, height){
    var area =width * height;
    return area;
}

calcArea(20,30);




var requestedDaysPrompt =  prompt("How many days of training would you like?"); //User is prompted for the number of training days they would like
if (requestedDaysPrompt === ""){
    requestedDaysPrompt = prompt("How many days of training would you like? Do not leave blank.","0");//Re-prompting if no value is entered
}
var requestedDays = (requestedDaysPrompt); //In case we run into people who are requesting partial days. If so add float here.
console.log(requestedDays);

var formatPrompt =  prompt("Would you prefer an onsite, virtual or public delivery method?"); //User is prompted for their delivery method
if (formatPrompt === ""){
    formatPrompt = prompt("Would you prefer an onsite, virtual or public delivery method? Do not leave blank.");//Re-prompting if no value is entered
}

if(formatPrompt == "onsite"){f
    var cost =5300;//Standard cost for onsite per day
}else if(formatPrompt == "virtual"){
    var cost = 4800;//Standard cost for virtual per day
}else{
    var cost = 900;//Standard cost for public per day, the only remaining option.
}
console.log(cost);

var discountPrompt =  prompt("do you have a discount code?"); //User is prompted for their discount code if applicable. Only accounting for two codes, dc10 and dc20
if (discountPrompt === ""){
    discountPrompt = prompt("do you have a discount code? Do not leave blank.");//Re-prompting if no value is entered
}

if(discountPrompt == "dc10"){
    var discount = .10;//10% off list
}else if(discountPrompt == "dc20") {
    var discount = .20;//20% off list
}else{
    var discount = 0;
}
console.log(discount);

productDetail(requestedDays,cost,discount);//function call pulling data from user inputs
function productDetail(requestedDays,cost,discount){//function call with 3 parameters.
    var net = requestedDays*cost-requestedDays*cost*discount;//output of the function. Calculation takes into account cost per day and discount if any.
    console.log("Your total training cost will be $" + net + ".");
};

productDetail(5,900,.10);//Second booking with different values. Called the function twice to test.

var dailyBudget = 100//Daily budget
var appAvgCost = 7//Not needs now but reflect average cost of apps
var drinkAvgCost = 7////Not needs now but reflect average cost of drink

var estAppBill = prompt("How much money are your desired apps going to cost?")//Collect cost of appetizers
if (estAppBill === ""){
    estAppBill = prompt("How much money are your desired apps going to cost? Please provide and answer.");//Re-prompting if no value is not entered
}
var appBill=parseInt(estAppBill)//Return integer

var estFoodBill = prompt("How much money is you desired main course?")//Collect cost of main course
if (estFoodBill === ""){
    estFoodBill = prompt("How much money is you desired main course? Please provide an answer.")//Re-prompting if no value is not entered
}
var foodBill=parseInt(estFoodBill)//Return integer

var estDrinkBill = prompt("How much are you wanting to drop on drinks you lush?")//Collect cost of main course
if (estDrinkBill === ""){
    estDrinkBill = prompt("How much are you wanting to drop on drinks you lush? Please provide an answer.")//Re-prompting if no value is not entered
}
var drinkBill=parseInt(estDrinkBill)//Return integer

var estDinnerBill= parseInt(appBill+foodBill+drinkBill);//Total estimated dinner bill

console.log(estDinnerBill);


if (estDinnerBill<=dailyBudget){//If under budget
    alert("Bon Appetite and Cheers");
}else if(estDinnerBill>dailyBudget) {//If over budget continue to drop an app or a drink until under budget
    alert("Time to make some sacrifices");

var loopCounter

    for (loopCounter = estDinnerBill; loopCounter > 100; loopCounter -= 7)//Counter decrement original estimate by 7 until budget is reached
        console.log(loopCounter);

var totalLoops = parseInt(estDinnerBill - loopCounter) / 7//Calculation of total number of loops
    console.log(totalLoops);
    alert("You are going to need to cut" + " " + totalLoops + " " + "apps and/or drinks");}
*/