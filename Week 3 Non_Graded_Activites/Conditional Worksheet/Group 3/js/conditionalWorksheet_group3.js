/**
 * Created by James Woods
 * Origination Date 7/20/14.
 * Week 3 Conditional Worksheet Group 3
 */

    //Tire Pressure warning

var frontLeftStandard = 32;//To be used if you want to enforce a minimum air pressure
var frontRightStandard = 32;//To be used if you want to enforce a minimum air pressure
var rearLeftStandard = 40;//To be used if you want to enforce a minimum air pressure
var rearRightStandard = 40;//To be used if you want to enforce a minimum air pressure

var frontLeft = prompt("What is the pressure of your front left tire");//prompt to collect front left tire pressure
 console.log(frontLeft);

 var frontRight = prompt("What is the pressure of your front right tire");//prompt to collect front right tire pressure
 console.log(frontRight);

 var rearLeft = prompt("What is the pressure of your rear left tire");//prompt to collect rear left tire pressure
 console.log(rearLeft);

 var rearRight = prompt("What is the pressure of your rear right tire");//prompt to collect rear right tire pressure
 console.log(rearRight);

var pressureArray = new Array ();//merge all selections into an array

pressureArray[0] = frontLeft;
pressureArray[1] = frontRight;
pressureArray[2] = rearLeft;
pressureArray[3] = rearRight;

console.log(pressureArray);

/*if (pressureArray[0]>=32 && pressureArray[1]>=32 && pressureArray[2]>=40 && pressureArray[3]>=40) {//The code if you want to enforce a minimum air pressure per tire standard
    alert("The tires pass spec!");
}else
    alert("Get your tires checked out!");*/

//If you just simply want to enforce pressure equivalence without referring to a particular pressure

if (pressureArray[0] == pressureArray[1] && pressureArray[2] == pressureArray[3]) {//Enforce pressure equivalence between two front and two rear tires before all clear message
    alert("The tires pass spec!");
}else
    alert("Get your tires checked out!");



