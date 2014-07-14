/**
 * Created by James Woods
 * Origination Date 7/13/14.
 * Expressions_worksheet
 */


//var humanYears = prompt("How old is your dog in human years?");
//if (humanYears != null) {
   // document.getElementById("demo").innerHTML =
       // "Hello " + person + "! How are you today?";
//}
//alert("How old is your dog in human years?");//

var agePrompt =  prompt("How old is Sparky in human years?","0");
var humanYears = parseInt(agePrompt);
var dogYears = humanYears * 7;
console.log(dogYears);

alert("Sparky is" + "" + (dogYears) + ""  + "years old");
