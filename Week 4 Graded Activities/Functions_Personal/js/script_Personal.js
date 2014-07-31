/**
 * Created by James Woods
 * Origination Date 7/30/14.
 * Graded Assignment_Functions_Personal
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


var weight =  prompt("How much does Bella weight?"); //User is prompted for weight of the dog
if (weight === ""){
    weight = prompt("How much does Bella weight? Do not leave blank.");//Re-prompting if no value is entered
}
console.log(weight)
var cups =  prompt("How many cups do you feed Bella a day?"); //User is prompted for weight of the dog
if (cups === ""){
    cups = prompt("How many cups do you feed Bella a day? Do not leave blank.");//Re-prompting if no value is entered
}
console.log(cups)

 var dogFood = function(weight,cups){
//Code the function runs
 if(weight >= 40){
 var properFeeding = cups - cups * .25;//10% off list
     console.log(properFeeding);
 }else if(weight <=39 && weight>=32) {
    var properFeeding = cups;//20% off list
     console.log(properFeeding);
 }else if(weight <32 && weight>=28) {
    var properFeeding = cups + cups * .25;//20% off list
     console.log(properFeeding);
 }else{
    alert("Take your dog to the vet!")
 }

 }

dogFood(weight,cups);

