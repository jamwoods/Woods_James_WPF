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
var pizzaSlice = 8; //Slices per pizza
var peopleCount = 24; //Total people at the party
var pizzaCount = 10; //Total number of pizzas
var slicesPer = parseFloat(pizzaSlice*pizzaCount/peopleCount) //Slices per person calculation using decimals
console.log(slicesPer);

//SLice of Pie part 2-How many is Sparky going to get-count only whole pieces.
var sparkySlice = (slicesPer-3) * 24; //Calculation of # of slices Sparky gets. This multiplies the remainder by the number of people.
var sparkySliceRound = parseInt(sparkySlice) //This calculation removes te decimal. Rounded up.
console.log(sparkySliceRound);

//Average shopping bill
var shoppingBills=[80,65,110,89,76]; //An array of each weeks shopping bill.
var shoppingTotal=shoppingBills[0] + shoppingBills[1] + shoppingBills[2] + shoppingBills[3] + shoppingBills[4]; //Total spent
console.log(shoppingTotal);
var shoppingAverage=shoppingTotal/5 //Average of each shopping bill
console.log(shoppingAverage);