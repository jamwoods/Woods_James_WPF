/**
 * Created by James Woods
 * Origination Date 7/13/14.
 * Expressions_worksheet
 */

//Sparkys age calculation.
var agePrompt =  prompt("How old is Sparky in human years?","0"); //prompt box to gather human years from user
var humanYears = parseInt(agePrompt); //Setting humanYears variable equal to value obtained from prompt box
var dogYears = humanYears * 7; //Calculating dog years by multiplying value in humanYears by 7
console.log(dogYears);

//alert("Sparky is" + " " +  (dogYears) + " " +  "year old in dog years"); //Alert showing final calculation with friendly verbiage.
alert("Sparky is" + " " +  (humanYears) + " " +  "human years old which is" + " " +  (dogYears) + " " + "in dog years");

//Slice of Pie part 1
var pizzaSlice = 8;
var peopleCount = 24;
var pizzaCount = 10;
var slicesPer = parseFloat(pizzaSlice*pizzaCount/peopleCount)
console.log(slicesPer);

//SLice of Pie part 2-How many is Sparky going to get-count only whole pieces.
var sparkySlice = (slicesPer-3) * 24;
var sparkySliceRound = parseInt(sparkySlice)
console.log(sparkySliceRound);

//Average shopping bill
var shoppingBills=[80,65,110,89,76]
var shoppingTotal=shoppingBills[0,1,2,3,4,5]
console.log(shoppingTotal);