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



var frontLeftStandard = 32;
var frontRightStandard = 32;
var rearLeftStandard = 40;
var rearRightStandard = 40;

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

if (pressureArray[0]>=32 && pressureArray[1]>=32 && pressureArray[2]>=40 && pressureArray[3]>=40) {
    alert("The tires pass spec!");
}else
    alert("Get your tires checked out!");



