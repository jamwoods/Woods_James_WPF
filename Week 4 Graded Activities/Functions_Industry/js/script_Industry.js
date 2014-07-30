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

if(formatPrompt == "onsite"){f
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

productDetail(5,900,.10);//Second booking with different values. Called the function twice to test.
