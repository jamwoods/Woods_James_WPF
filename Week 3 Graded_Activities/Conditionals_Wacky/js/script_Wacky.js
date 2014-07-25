

/**
 * Created by James Woods
 * Origination Date 7/24/14.
 * Week 3 Graded Assignment_Conditionals_Wacky
 */

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


