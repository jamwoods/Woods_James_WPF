/**
 * Created by James Woods
 * Origination Date 7/21/14.
 * Week 3 Conditional Worksheet
 */

//Conditional Comparison Statement with Temp

/*Make sure the user has the correct username and password. If the username doesn’t match then a specific message for that
should be printed to the console. If the password doesn’t match a message should appear for that, etc. Only one error message should appear.

    Given:
Username entered by user
Password entered by user
Correct username
Correct password
Result To Print Out:
    “Welcome, (place their username here)!”  - if the username and password is correct
“User not found. Try again.” -if the username does not match
“Password does not match our records.”  -if the username matches but the password does not*/

var userName = prompt("Username");
console.log(userName);

var passWord = prompt("Password");
console.log(passWord);

if(userName!=="BossHog") {
    alert("User not found, try again");
}else if(userName=="BossHog" && passWord!=="RoscoPicoTrain") {
    alert("Password does not match our records");
}else{
    alert("Welcome" + " " + userName);
}


