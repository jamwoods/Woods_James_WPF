/**
 * Created by James Woods
 * Origination Date 7/13/14.
 * Expressions_worksheet
 */


var agePrompt =  prompt("How old is Sparky in human years?","0");
var humanYears = parseInt(agePrompt);
var dogYears = humanYears * 7;
console.log(dogYears);

alert("Sparky is" + " " +  (dogYears) + " " +  "year old in dog years");
