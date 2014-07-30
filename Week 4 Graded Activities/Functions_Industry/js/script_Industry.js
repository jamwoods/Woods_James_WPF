/**
 * Created by James Woods
 * Origination Date 7/29/14.
 * Graded Assignment_Functions_Industry
 */


/*Use a function as part of your code in each sub-project. This function should have at least two parameters and return a value.


    Each of the following requirements must exist in at least one of the 3 subprojects:
    A ternary

    An anonymous function
    A normal "named" function
    An expression with two arithmetic operators

    At least one logical operator
*/
//Calculating total cost for training delivery

var requestedDaysPrompt =  prompt("How many days of training would you like?"); //User is prompted for the number of training days they would like
if (requestedDaysPrompt === ""){
    requestedDaysPrompt = prompt("How many days of training would you like? Do not leave blank.","0");//Re-prompting if no value is entered
}
var requestedDays = (requestedDaysPrompt); //In case we run into people who are requesting partial days. If so add float here.
console.log(requestedDays);

var formatPrompt =  prompt("Would you prefer an onsite, virtual or public delivery method?"); //User is prompted for their delivery method
if (formatPrompt === ""){
    formatPrompt = prompt("Would you prefer an onsite, virtual or public delivery method? Do not leave blank.");//Re-prompting if no value is entered
}

if(formatPrompt == "onsite"){
    var cost =5300;//Standard cost for onsite per day
}else if(formatPrompt == "virtual"){
    var cost = 4800;//Standard cost for virtual per day
}else{
    var cost = 900;//Standard cost for public per day, the only remaining option.
}
console.log(cost);

var discountPrompt =  prompt("do you have a discount code?"); //User is prompted for their discount code if applicable. Only accounting for two codes, dc10 and dc20
if (discountPrompt === ""){
    discountPrompt = prompt("do you have a discount code? Do not leave blank.");//Re-prompting if no value is entered
}

if(discountPrompt == "dc10"){
    var discount = .10;//10% off list
}else if(discountPrompt == "dc20") {
    var discount = .20;//20% off list
}else{
    var discount = 0;
}
console.log(discount);

productDetail(requestedDays,cost,discount);//function call pulling data from user inputs
function productDetail(requestedDays,cost,discount){//function call with 3 parameters.
    var net = requestedDays*cost-requestedDays*cost*discount;//output of the function. Calculation takes into account cost per day and discount if any.
    console.log("Your total training cost will be $" + net + ".");
};

productDetail(5,900,.10);//Second booking with different values. Called the function twice to test
/*
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