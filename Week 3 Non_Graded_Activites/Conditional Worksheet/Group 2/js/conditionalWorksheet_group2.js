/**
 * Created by James Woods
 * Origination Date 7/21/14.
 * Week 3 Conditional Worksheet
 */

//Username and Password check


var userName = prompt("Username");//prompt to collect Username
console.log(userName);

var passWord = prompt("Password");////prompt to collect Username
console.log(passWord);

if(userName!=="BossHog") {//Set alert if username is not recognized
    alert("User not found, try again");
}else if(userName=="BossHog" && passWord!=="RoscoPicoTrain") {//Set alert if username is recognized but password is incorrect
    alert("Password does not match our records");
}else{//Set welcome message containing to greet username when both username and password match
    alert("Welcome" + " " + userName);
}


