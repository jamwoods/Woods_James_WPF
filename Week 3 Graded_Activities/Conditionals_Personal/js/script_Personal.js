/**
 * Created by James Woods
 * Origination Date 7/16/14.
 * Week 3 Graded Assignment_Conditionals_Personal
 */


var dailyBudget = 100

var estAppBill = prompt("How much money are you going to drop on appetizers tonight?")
if (estAppBill === ""){
    estAppBill = prompt("How much money are you going to drop on appetizers tonight? Please provide and answer.");//Re-prompting if no value is entered
}
var appBill=parseInt(estAppBill)

var estFoodBill = prompt("How much money are you going to drop on food tonight?")
if (estFoodBill === ""){
    estFoodBill = prompt("How much money are you going to drop on food tonight? Please provide an answer.")
}
var foodBill=parseInt(estFoodBill)

var estDrinkBill = prompt("How much money are you going to drop on drinks?")
if (estDrinkBill === ""){
    estDrinkBill = prompt("How much money are you going to drop on drink? Please provide an answer.")
}
var drinkBill=parseInt(estDrinkBill)

var estDinnerBill= parseInt(appBill+foodBill+drinkBill);
console.log(estDinnerBill);
/*

if (estDinnerBill<dailyBudget){
    alert("Bon Appetite and Cheers");
}else if(estDinnerBill>dailyBudget) {
    alert("Bon Appetite and Cheers");
}else{
    console.log("Need o grow a little");
}
if (qualityPrompt === ""){
    qualityPrompt = prompt("What is your overall quality score for the quarter? Do not leave blank.","0");//Re-prompting if no value is entered
}
alert("Your yearly cost for gas consists of" + " " +  "$" + (trueMTW/mpg * pricePerGallon).toFixed(2) + " " +  "for your work commute," + " " + "$" + (vacationMiles/mpg* pricePerGallon).toFixed(2) + " " + "for your vacation commute and" + " " + "$" + (weekendMiles/mpg * pricePerGallon).toFixed(2) + " " +  "for you weekend miles for a total yearly cost of" + " " + "$" + (totalYearlyCost));

*/