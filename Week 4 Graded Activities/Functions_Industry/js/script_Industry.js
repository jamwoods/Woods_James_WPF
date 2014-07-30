/**
 * Created by James Woods
 * Origination Date 7/29/14.
 * Graded Assignment_Functions_Industry
 */

//Hours worked in a week
alert ("Let's see what percentage of your bonus you will be awarded this quarter.");
alert ("Your bonus is comprised of two elements, a quality score and a utilization percentage.");


//Quality Score
var qualityPrompt =  prompt("What is your overall quality score for the quarter?"); //User is prompted for their quarterly quality score
if (qualityPrompt === ""){
    qualityPrompt = prompt("What is your overall quality score for the quarter? Do not leave blank.","0");//Re-prompting if no value is entered
}
var quality = parseFloat(qualityPrompt); //The number from the prompt is returned with a decimal place if necessary, e.g. 9.2
console.log(quality);


//Utilization
var utilPrompt =  prompt("What is your average utilization percentage for the quarter?"); //User is prompted for their utilization percentage
if (utilPrompt === ""){
    utilPrompt = prompt("What is your overall quality score for the quarter? Do not leave blank");//Re-prompting if no value is entered
}
var util = utilPrompt; //Return user selection as a number in this variable
console.log(util);

//Payout percentage calculation for quality score scale
if (quality < 7.0)
    {var qPayout = 0};
if (quality <= 8.0 && quality >=7.0)
    {var qPayout = .8};
if (quality < 9.0 && quality >8.0)
    {var qPayout = .9};
if (quality >= 9.0)
    {var qPayout =1};

console.log(qPayout);

//Payout percentage calculation for utilization percentage
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