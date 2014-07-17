/**
 * Created by James Woods
 * Origination Date 7/16/14.
 * Graded Assignment_Industry
 */

//Hours worked in a week
//alert ("Let's calculate the number of hours you will be working this week as a Corporate Trainer.");
//alert ("Your total hours are comprised of four primary tasks which are prep, travel, delivery and post training.");
//alert ("The two largest fluctuating variables will be travel destination and class duration. Preparation time will be a factor as well but we will consider post training as a constant.");
//alert ("Classes run from 1 day to 5 days and travel will be either to the West Coast, Mid West or East Coast");

alert(Math.floor(Math.random()*11))
alert(Math.floor(Math.random()*11))
alert(Math.floor(Math.random()*11))

var randomNumber1=Math.floor(Math.random()*11)
console.log(randomNumber1)
//var randomnumber2
//var randomnumber3

//var randomnumberPrompt1 = prompt(Math.floor(Math.random()*11));

//var randomnumberPrompt2 = prompt(Math.floor(Math.random()*11));

//var randomnumberPrompt3 = prompt(Math.floor(Math.random()*11));

/*

var daysPrompt =  prompt("Please choose the number of days you will be training this week.","0"); //User selects class delivery length
var trainingDays = parseInt(daysPrompt); //Return user selection as a number
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

*/