/**
 * Created by James Woods
 * Origination Date 7/29/14.
 * Week 4 Functions Worksheet
 */

//Circumference = n(3.14) * d (2*r)


//funcName(argument1, argument2);
//function funcName(parameter1, parameter2){
    //code
//}

calcArea(30,20);//30 and 20 are the arguments
function calcArea(w,h){//storage bins. order matters. 30 is in the first parameter, 20 in the second.
    var area = w * h;
    console.log(area);
}

//Circumference of a circle
circleCir(3.14,6);
function circleCir(pie,r){
   var circumference = pie * r*2;
   console.log("The circumference of the circle is" + " " + circumference);
}





/***********

//Functions Store stuff, specifically lines of code as opposed to variables that store values. Think of them like factories.
//Different types of functions. Functions=Normal Functions, Procedures, Anonymous Functions

//Basic Structure
//function functionName(){//Instead of "if" we will use the keyword function. The parenthesis may be empty or they may contain a parameter
//code
}

//function outptMsg(){//
console.log("Hello World");//You could embed variables and the calculation of those variables, so width height and W*H

}

//Function Invocation-The call must be invoked in order for the function to execute. They have to be called. How do you do that. Write the name of the function and
// follow it by the two parenthesis. function call=function invocation

//Variable Scope
function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
    console.log(area);
}

calcArea();//What if you had a width outside the function. Code prefers to render variables found within the function. We say the the width variable is scoped to calcArea().
//If there is code that is outside of a function like console.log it will call the variables that are also outside of the function.

//Arguments and Parameters-You need something to be slightly different every time you use it.

//Parameter allow us to store and use different basic material as we need them. Not all functions have to have parameters and arguments

funcName(argument1, argument2);
function funcName(parameter1, parameter2){
    //code
}


calcArea(30,20);//30 and 20 are the arguments
function calcArea(w,h){//storage bins. order matters. 30 is in the first parameter, 20 in the second.
    var area = w * h;
    console.log(area);
}


function dogYears(age){//Parenthesis here holds parameters-storage container. The function definition
    var dogYears = age * 7//Function call
    console.log("Sparky is" + dogYears + "years old")
}
dogYears(4);//Parenthesis here holds arguments

//Returning values

var total = calcArea(30,20);//30 and 20 are the arguments//Whatever that function returns store it into this variable. Functions that are returning should be assigned to variables.

function calcArea(w,h){//storage bins. order matters. 30 is in the first parameter, 20 in the second.
    var area = w * h;
    return area;

}
console.log(total);//Generally functions that return value should be assigned to variables.

//Function versus Procedure
//Functions return values and procedures do not. Functions that just have a list of things to do are procedures.

//Anonymous Function-works the same way as earlier structure. Downside is that they have to be declared before they are called. So invoking should happen after function definition.
// These are used for the sake of code brevity
//They are created and given a name at the same time the code is executed. Also called closures
//var functionName = function(){
//code to run
}
//OR
var calcArea = function( width, height){(
    ///code that runs
    var area = width * height
    return area;
}
calcArea (20,30);//can return to a variable
    */