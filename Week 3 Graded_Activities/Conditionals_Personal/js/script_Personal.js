/**
 * Created by James Woods
 * Origination Date 7/16/14.
 * Week 3 Graded Assignment_Conditionals_Personal
 */


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
