/**
 * Created by James Woods
 * Origination Date 7/30/14.
 * Graded Assignment_Functions_Personal
 */


//Calculating correct food quantity for Bella


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
 var properFeeding = Number(cups) - (Number(cups) * .25);//Increase amount by 25%
     alert("You should be feeding Bella" + " " + properFeeding + " " + "cups a day");
 }else if(weight <=39 && weight>=32) {//If on target weight cup count remains the same
    var properFeeding = cups;//Maintain current levels
     alert("You should be feeding Bella" + " " + properFeeding + " " +  "cups a day");
 }else if(weight <32 && weight>=28) {//If under weight cup count is reduced
    var properFeeding = Number(cups) + (Number(cups) * .25);//reduce amount by 25%
     alert("You should be feeding Bella" + " " + properFeeding + " " +  "cups a day");
 }else{
    alert("Take your dog to the vet!")//If drastically under weight see the vet.

 }

 }

dogFood(weight,cups);//Invoking the function



