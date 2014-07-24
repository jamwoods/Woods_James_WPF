/**
 * Created by James Woods
 * Origination Date 7/16/14.
 * Week 3 Graded Assignment_Conditionals_Personal
 */


var estDinnerBill = prompt("How much money are you going to drop at dinner if you get everything you want?")
console.log("estDinnerBill")

if (estDinnerBill === ""){
    estDinnerBill = prompt("How much money are you going to drop at dinner if you get everything you want? Please provide and answer.");//Re-prompting if no value is entered
}
var dailyBudget = prompt("What is your daily budget?")
if (dailyBudget === ""){
    dailyBudget = prompt("What is your daily budget? Please provide and answer.");//Re-prompting if no value is entered
}
var drinkCost = prompt("How much are drinks running?")
if (drinkCost === ""){
    drinkCost = prompt("How much are drinks running?" Please provide and answer.");//Re-prompting if no value is entered
}
var appOrder = prompt("Were you going to order an appetizer?")
if (appOrder === ""){
    appOrder = prompt("Were you going to order an appetizer?" Please provide and answer.");//Re-prompting if no value is entered
}
/*
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
if (qualityPrompt === ""){
    qualityPrompt = prompt("What is your overall quality score for the quarter? Do not leave blank.","0");//Re-prompting if no value is entered
}
alert("Your yearly cost for gas consists of" + " " +  "$" + (trueMTW/mpg * pricePerGallon).toFixed(2) + " " +  "for your work commute," + " " + "$" + (vacationMiles/mpg* pricePerGallon).toFixed(2) + " " + "for your vacation commute and" + " " + "$" + (weekendMiles/mpg * pricePerGallon).toFixed(2) + " " +  "for you weekend miles for a total yearly cost of" + " " + "$" + (totalYearlyCost));

*/