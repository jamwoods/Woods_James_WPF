/**
 * Created by James Woods
 * Origination Date 7/20/14.
 * Week 3 Conditional Worksheet Group 3
 */

    /*Choose 1 from this group
     Tire Pressure I

     To meet to maintenance standards a car’s front two tires should have the same pressure and the back two tires should have the same pressure.  But the front tires and the rear tires can have different pressure than each other, so it is not necessary for all four tires’ pressure to be the same. Create a single conditional that would determine if the tires of a given car are up to spec.


     Given:
     Pressure for each tire of the car (in psi) in an array.
     Result To Print Out:
     “The tires pass spec!” Or  “ Get your tires checked out!” */




 var frontLeft = prompt("What is the pressure of your front left tire");////prompt to collect Username
 console.log(frontLeft);

 var frontRight = prompt("What is the pressure of your front right tire");////prompt to collect Username
 console.log(frontRight);

 var rearLeft = prompt("What is the pressure of your rear left tire");////prompt to collect Username
 console.log(rearLeft);

 var rearRight = prompt("What is the pressure of your rear right tire");////prompt to collect Username
 console.log(rearRight);

var pressureArray = new Array ();

pressureArray[0] = frontLeft;
pressureArray[1] = frontRight;
pressureArray[2] = rearLeft;
pressureArray[3] = rearRight;

console.log(pressureArray);


/*
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
*/

//Conditional Comparison Statement with Temp

