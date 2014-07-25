

/**
 * Created by James Woods
 * Origination Date 7/24/14.
 * Week 3 Graded Assignment_Conditionals_Wacky
 */

var dinnerCostPrompt = prompt("How much are you going to splurge on dinner tonight?")//Collect cost of appetizers
if (dinnerCostPrompt === ""){
    dinnerCostPrompt = prompt("How much are you going to splurge on dinner tonight? Please provide and answer.");//Re-prompting if no value is not entered
}
var dinnerCost=parseInt(dinnerCostPrompt)//Return integer

var flowerBouquet = prompt("Are you going to greet her with flowers at the door? If so what is the size of the bouquet, small, medium, large or no flowers?")//Collect cost of appetizers
if (flowerBouquet === "") {
    flowerBouquet = prompt("rAre you going to greet her with flowers at the door? If so what is the size of the bouquet, small, medium or large? Please provide and answer.");//Re-prompting if no value is not entered
}


if (dinnerCost>140 || flowerBouquet=="large"){
    alert("Second date assured");
}else if(dinnerCost >100 && dinnerCost < 140 || flowerBouquet== "medium") {
    console.log("You had better be real funny for a second");
    alert("You had better be real funny if you want a second date");
}else{
    console.log("Queue your netflix account");
    alert("Queue your netflix account");
}

/*

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