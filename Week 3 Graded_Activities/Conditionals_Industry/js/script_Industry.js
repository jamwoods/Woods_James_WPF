/**
 * Created by James Woods
 * Origination Date 7/23/14.
 * Graded Assignment_Conditionals_Industry
 */

//Hours worked in a week
alert ("Let's see what percentage of your bonus you will be awarded this quarter.");
alert ("Your bonus is comprised of two elements, a quality score and a utilization percentage.");


//Quality Score
var qualityPrompt =  prompt("What is your overall quality score for the quarter?","0"); //User is prompted for their quarterly quality score
var quality = parseFloat(qualityPrompt); //The number from the prompt is returned with a decimal place if necessary, e.g. 9.2
console.log(quality);

//Utilization
var utilPrompt =  prompt("What is your average utilization percentage for the quarter?","0"); //User selects class delivery length
var util = utilPrompt; //Return user selection as a number
console.log(util);

/*
 */
//Transit Time
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

//Preparation Time
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

