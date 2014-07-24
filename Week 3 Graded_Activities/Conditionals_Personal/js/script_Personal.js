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


var loopCounter

for (loopCounter=estDinnerBill; loopCounter >100; loopCounter-=7)
    console.log(loopCounter);


/*if (estDinnerBill<=dailyBudget){
    alert("Bon Appetite and Cheers");
}else if(estDinnerBill>dailyBudget) {
 var updatedDinnerBill= estDinnerBill-appBill
    console.log(updatedDinnerBill);
 alert("Time to make some sacrifices");
}else if(updatedDinnerBill>dailyBudget) {
    var updatedDinnerBillTwo= updatedDinnerBill-drinkBill
    console.log(updatedDinnerBillTwo);
 }

/*
}else{
    console.log("Need o grow a little");

 if (estDinnerBill<=dailyBudget){
 alert("Bon Appetite and Cheers");
 }else if(estDinnerBill>dailyBudget) {



 }else{
 console.log("Need o grow a little");



}
alert("Your yearly cost for gas consists of" + " " +  "$" + (trueMTW/mpg * pricePerGallon).toFixed(2) + " " +  "for your work commute," + " " + "$" + (vacationMiles/mpg* pricePerGallon).toFixed(2) + " " + "for your vacation commute and" + " " + "$" + (weekendMiles/mpg * pricePerGallon).toFixed(2) + " " +  "for you weekend miles for a total yearly cost of" + " " + "$" + (totalYearlyCost));

*/