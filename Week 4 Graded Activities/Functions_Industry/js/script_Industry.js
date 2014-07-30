/**
 * Created by James Woods
 * Origination Date 7/29/14.
 * Graded Assignment_Functions_Industry
 */


/*Use a function as part of your code in each sub-project. This function should have at least two parameters and return a value.


    Each of the following requirements must exist in at least one of the 3 subprojects:
    A ternary
An else if
    An anonymous function
    A normal "named" function
    An expression with two arithmetic operators
A function with three parameters.
    At least one logical operator
*/
//Calculating total cost for training delivery

var requestedDaysPrompt =  prompt("How many days of training would you like?"); //User is prompted for their quarterly quality score
if (requestedDaysPrompt === ""){
    requestedDaysPrompt = prompt("How many days of training would you like? Do not leave blank.","0");//Re-prompting if no value is entered
}
var requestedDays = (requestedDaysPrompt); //The number from the prompt is returned with a decimal place if necessary, e.g. 9.2
console.log(requestedDays);

var formatPrompt =  prompt("Would you prefer an onsite, virtual or public delivery method?"); //User is prompted for their quarterly quality score
if (formatPrompt === ""){
    formatPrompt = prompt("Would you prefer an onsite, virtual or public delivery method? Do not leave blank.");//Re-prompting if no value is entered
}

if(formatPrompt == "onsite"){
    var cost =5300;

}else if(formatPrompt == "virtual"){
    var cost = 4800;

}else{
    var cost = 900;


}
console.log(cost);
/*//The number `from the prompt is returned with a decimal place if necessary, e.g. 9.2

    if (dinnerCost>140 || flowerBouquet=="large"){//One of two conditions must be met in order to secure a second date
        alert("Second date assured");
    }else if(dinnerCost >100 && dinnerCost < 140 || flowerBouquet== "medium") {//If the above is not met all hope is not lost
        console.log("You had better be real funny for a second");
        alert("You had better be real funny if you want a second date");
    }else{
        console.log("Queue your Netflix account");//All hope is lost
        alert("Queue your Netflix account");
    }
*/
/*productDetails(6); //Arguments presumably to be supplied by visitor input
function productDetail(c,){//function call with 1 parameter
    var circumference = 3.14 * r*2;//output of the function
    console.log("The circumference of the circle is" + " " + circumference);
};
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
*/