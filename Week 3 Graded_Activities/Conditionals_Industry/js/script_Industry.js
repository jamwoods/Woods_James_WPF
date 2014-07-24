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

if (quality < 7.0)
    {var qPayout = 0};
if (quality <= 8.0 && quality >=7.0)
    {var qPayout = .8};
if (quality < 9.0 && quality >8.0)
    {var qPayout = .9};
if (quality >= 9.0)
    {var qPayout =1};

console.log(qPayout);

if (util < 40)
{var uPayout = 0};
if (util <= 45 && util >=40)
{var uPayout = .8};
if (util < 50 && util >45)
{var uPayout = .9};
if (util >= 55)
{var uPayout =1};

console.log(uPayout);

alert("Congratulations, you will be awarded" + " " + ((qPayout + uPayout)/2)*100+ "%"+ " " + "of your total bonus");