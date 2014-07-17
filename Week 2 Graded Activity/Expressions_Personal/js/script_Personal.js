/**
 * Created by James Woods
 * Origination Date 7/16/14.
 * Week 2 Graded Assignment_Personal
 */


alert ("How much are you really spending on gas a year?");

//Gas mileage
var mpgPrompt =  prompt("Please enter your cars gas mileage.","0"); //User inputs gas mileage
var mpg = parseInt(mpgPrompt); //Return user selection as a number
console.log(mpg);

//Miles to work
var mtwPrompt =  prompt("How many miles away is your office?","0"); //User inputs distance from home to office
var mtw = parseInt(mtwPrompt); //Return user selection as a number
var roundTripYearMTW = mtwPrompt * 2 * 5 * 52//Total miles to and from work for the year.
console.log(roundTripYearMTW);

//Weeks vacation
var vacationPrompt =  prompt("Please enter the number of weeks vacation you will be taking this year.","0"); //User inputs vacation weeks
var vacation = parseInt(vacationPrompt); //Return user selection as a number
console.log(vacation);

//Adjusted miles to work
var trueMTW = roundTripYearMTW - vacation * 5 * 48//Pulling out the miles not driven during vacation
console.log(trueMTW);

//Vacation Miles
var vacationMilesPrompt =  prompt("How many miles will you drive during your vacation?","0"); //User inputs vacation weeks
var vacationMiles = parseInt(vacationMilesPrompt); //Return user selection as a number
console.log(vacationMiles);

//Weekend Miles
var weekendMilesPrompt =  prompt("How many miles do you average on the weekend?","0"); //User inputs vacation weeks
var weekendMiles = parseInt(weekendMilesPrompt); //Return user selection as a number
console.log(weekendMiles);

//Total miles
var totalMiles= trueMTW + vacationMiles + weekendMiles
console.log(totalMiles);

//Current price per gallon
var pricePerGallonsPrompt =  prompt("What is the local price per gallon of your gas of choice?","0"); //User inputs vacation weeks
var pricePerGallon = parseFloat(pricePerGallonsPrompt); //Return user selection as a number
console.log(pricePerGallon);

//Total yearly cost

var totalYearlyCost = parseFloat(trueMTW/mpg * pricePerGallon + vacationMiles/mpg * pricePerGallon + weekendMiles/mpg * pricePerGallon).toFixed(2);
console.log(totalYearlyCost); //Calculating total yearly cost so last statement for the alert is easier to manage. Could also have calculated the other three statement and place in separate variable but did not want to.

alert("Your yearly cost for gas consists of" + " " +  "$" + (trueMTW/mpg * pricePerGallon).toFixed(2) + " " +  "for your work commute," + " " + "$" + (vacationMiles/mpg* pricePerGallon).toFixed(2) + " " + "for your vacation commute and" + " " + "$" + (weekendMiles/mpg * pricePerGallon).toFixed(2) + " " +  "for you weekend miles for a total yearly cost of" + " " + "$" + (totalYearlyCost));

