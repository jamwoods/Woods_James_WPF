/**
 * Created by James Woods
 * Origination Date 7/30/14.
 * Graded Assignment_Functions_Personal
 */


//Calculating correct food quantity for Bella


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


var weight =  prompt("How much does Bella weight?"); //User is prompted for weight of the dog
if (weight === ""){
    weight = prompt("How much does Bella weight? Do not leave blank.");//Re-prompting if no value is entered
}
console.log(weight)
var cups =  prompt("How many cups do you feed Bella a day?"); //User is prompted for current cup count
if (cups === ""){
    cups = prompt("How many cups do you feed Bella a day? Do not leave blank.");//Re-prompting if no value is entered
}
console.log(cups)

var dogFood = function(weight,cups){
//Code the function runs
    if(weight >= 40){
        var properFeeding = cups - cups * .25;//Increase amount by 25%
        alert("You should be feeding Bella" + " " + properFeeding + " " + "cups a day");
    }else if(weight <=39 && weight>=32) {//If on target weight cup count remains the same
        var properFeeding = cups;//Maintain current levels
        alert("You should be feeding Bella" + " " + properFeeding + " " +  "cups a day");
    }else if(weight <32 && weight>=28) {//If under weight cup count is reduced
        var properFeeding = (cups + cups * .25)/10;//reduce amount by 25%
        alert("You should be feeding Bella" + " " + properFeeding + " " +  "cups a day");
    }else{
        alert("Take your dog to the vet!")//If drastically under weight see the vet.

    }

}

dogFood(weight,cups);//Invoking the function





//Second date or not
var dinnerCostPrompt = prompt("How much are you going to splurge on dinner tonight?")//How much are you going to spend on dinner
if (dinnerCostPrompt === ""){
    dinnerCostPrompt = prompt("How much are you going to splurge on dinner tonight? Please provide and answer.");//Re-prompting if no value is not entered
}
var dinnerCost=parseInt(dinnerCostPrompt)//Return integer

var flowerBouquet = prompt("Are you going to greet her with flowers at the door? If so what is the size of the bouquet, small, medium, large or no flowers?")//Flowers too?
if (flowerBouquet === "") {
    flowerBouquet = prompt("Are you going to greet her with flowers at the door? If so what is the size of the bouquet, small, medium or large? Please provide and answer.");//Re-prompting if no value is not entered
}

if (dinnerCost>140 || flowerBouquet=="large"){//One of two conditions must be met in order to secure a second date
    alert("Second date assured");
}else if(dinnerCost >100 && dinnerCost < 140 || flowerBouquet== "medium") {//If the above is not met all hope is not lost
    console.log("You had better be real funny for a second");
    alert("You had better be real funny if you want a second date");
}else{
    console.log("Queue your Netflix account");//All hope is lost
    alert("Queue your Netflix account");
}

//What happens after the second the date

var dates = prompt("How any dates have you had with this girl?")//How many dates have been locked with a single woman
if (dates === "") {
    dates = prompt("How any dates have you had with this girl? Please provide and answer.");//Re-prompting if no value is not entered
}

onLineAccount = (dates>5) ? "Time to close your online account" : "Time for more online trolling"//If you haven't broken the 5 barrier keep your options open, else close your online account

console.log(dates);
alert(onLineAccount)


