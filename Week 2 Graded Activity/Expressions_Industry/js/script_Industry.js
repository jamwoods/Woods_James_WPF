/**
 * Created by James Woods
 * Origination Date 7/16/14.
 * Graded Assignment_Industry
 */

//Hours worked in a week
//alert ("Let's calculate the number of hours you will be working this week as a Corporate Trainer.");
//alert ("Your total hours are comprised of four primary tasks which are prep, travel, delivery and post training.");
//alert ("The two largest fluctuating variables will be travel destination and class duration");
//alert ("Classes run from 1 day to 5 days and travel will be either to the West Coast, Mid West or East Coast");

var daysPrompt =  prompt("Please choose the number of days you will be training this week.","0"); //prompt box to gather human years from user
var trainingDays = parseInt(daysPrompt); //Setting humanYears variable equal to value obtained from prompt box
var totalDeliveryHours = trainingDays * 8
console.log(totalDeliveryHours);

var locationPrompt =  prompt("Please input your destination as either W, MW or E","Select Location"); //prompt box to gather human years from user
var locationCase = locationPrompt.toUpperCase();
console.log(locationCase);
if (locationCase == "W")
{var locationTime = 2;}
if (locationCase == "MW")
{var locationTime = 4;}
if (locationCase == "E")
{var locationTime = 6;}
console.log(locationTime);


alert ("How prepared are you for class? We will factor in the number of times you have taught the class in order to determine prep time");
var classExp =  prompt("Please enter the number of times you have taught this class.","0"); //prompt box to
var prep = parseInt(classExp); //Setting humanYears variable equal to value obtained from prompt box
console.log(prep);

if (prep >= 0 && prep <= 3)
{var prepTime = 8;}
if (prep >= 4 && prep <= 8)
{var prepTime = 4;}
if (prep >= 9)
{var prepTime = 1;}
console.log(prepTime);


alert("Your total working hours for this week include" + " " +  (totalDeliveryHours) + " " +  "delivery hours," + " " + (locationTime) + " " + "travel hours," + " " + (prepTime) + " " +  "preparation hours, and finally" + " " + "one hour of post training work for a grand total of" + " " + (Number(totalDeliveryHours)+Number(locationTime)+Number(prepTime)+1) + " " + "hours");

