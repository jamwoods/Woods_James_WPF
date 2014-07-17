/**
 * Created by James Woods
 * Origination Date 7/16/14.
 * Week 2 Graded Assignment_Personal
 */


alert ("How much are you really spending on gas a year?");

//Gas mileage
var mpgPrompt =  prompt("Please enter your cars gas mileage.","0"); //User inputs gas mileage
var mpg = parseInt(mpgPrompt); //Return user selection as a number

//Miles to work
var mtwPrompt =  prompt("How many miles away is your office?","0"); //User inputs distance from home to office
var mtw = parseInt(mtwPrompt); //Return user selection as a number
var roundTripYearMTW = mtwPrompt * 2 * 52//Total miles to and from work for the year
console.log(roundTripMTW);

var vacationPrompt =  prompt("Please enter the number of weeks vacation you will be taking this year.","0"); //User inputs vacation weeks
var vacation = parseInt(vacationPrompt); //Return user selection as a number

var vacationMilesPrompt =  prompt("How many miles will you drive during your vacation?.","0"); //User inputs vacation weeks
var vacationMiles = parseInt(vacationMilesPrompt); //Return user selection as a number

var weekendMilesPrompt =  prompt("How many miles do you average on the weekend?.","0"); //User inputs vacation weeks
var weekendMiles = parseInt(weekendMilesPrompt); //Return user selection as a number


var totalDeliveryHours = trainingDays * 8 //Calculate working hours at 8 hour per deliver day
console.log(totalDeliveryHours);

var locationPrompt =  prompt("Please input your destination as either W, MW or E","Select Location"); //prompt to determine travel time. Underlying assumption is that the user is in Utah.
var locationCase = locationPrompt.toUpperCase();//Forcing to upper case to avoid user input variance.
console.log(locationCase);
if (locationCase == "W") //The ability to input a letter is a convenience afforded to the user but we still need to translate those selection to actual travel time.
{var locationTime = 2;} //2 hours transit
if (locationCase == "MW")
{var locationTime = 4;} //4 hours transit
if (locationCase == "E")
{var locationTime = 6;} //6 hours transit
console.log(locationTime);


alert ("How prepared are you for class? We will factor in the number of times you have taught the class in order to determine prep time");
var classExp =  prompt("Please enter the number of times you have taught this class.","0"); //Prompt box to to collect experience level
var prep = parseInt(classExp); //Insure classExp is recognized as a number and deposited in the prep variable
console.log(prep);

if (prep >= 0 && prep <= 3) //Assign a user selection to one of three categories, each of which imply there own prep time. This is the never to 3 times
{var prepTime = 8;}
if (prep >= 4 && prep <= 8)// The 4 to 8
{var prepTime = 4;}
if (prep >= 9) //The greater than 9
{var prepTime = 1;}
console.log(prepTime);


alert("Your total working hours for this week include" + " " +  (totalDeliveryHours) + " " +  "delivery hours," + " " + (locationTime) + " " + "travel hours," + " " + (prepTime) + " " +  "preparation hours, and finally" + " " + "one hour of post training work for a grand total of" + " " + (Number(totalDeliveryHours)+Number(locationTime)+Number(prepTime)+1) + " " + "hours");

