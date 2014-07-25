

/**
 * Created by James Woods
 * Origination Date 7/24/14.
 * Week 3 Graded Assignment_Conditionals_Wacky
 */

var dinnerCostPrompt = prompt("How much are you going to splurge on dinner tonight?")//Collect cost of appetizers
if (dinnerCostPrompt === ""){
    dinnerCostPrompt = prompt("How much are you going to splurge on dinner tonight? Please provide and answer.");//Re-prompting if no value is not entered
}
var dinnerCost=parseInt(dinnerCostPrompt)//Return integer

var flowerBouquet = prompt("Are you going to greet her with flowers at the door? If so what is the size of the bouquet, small, medium, large or no flowers?")//Collect cost of appetizers
if (flowerBouquet === "") {
    flowerBouquet = prompt("rAre you going to greet her with flowers at the door? If so what is the size of the bouquet, small, medium or large? Please provide and answer.");//Re-prompting if no value is not entered
}


if (dinnerCost>140 || flowerBouquet=="large"){
    alert("Second date assured");
}else if(dinnerCost >100 && dinnerCost < 140 || flowerBouquet== "medium") {
    console.log("You had better be real funny for a second");
    alert("You had better be real funny if you want a second date");
}else{
    console.log("Queue your Netflix account");
    alert("Queue your Netflix account");
}

var age = 11;
var book;

//If child under 10 they get book A otherwise they get B

var dates = prompt("How any dates have you had with this girl?")//Collect cost of appetizers
if (dates === "") {
    dates = prompt("How any dates have you had with this girl? Please provide and answer.");//Re-prompting if no value is not entered
}

//if(dates > 5){
 //   onlineAccount="closed";
//}else{
//    onLineAccount = "time for more online trolling";
//}


onLineAccount = (dates>5) ? "Time to close your online account" : "Time for more online trolling"

console.log(dates);
alert(onLineAccount)


