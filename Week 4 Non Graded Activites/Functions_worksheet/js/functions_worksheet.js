/**
 * Created by James Woods
 * Origination Date 7/29/14.
 * Week 4 Functions Worksheet
 */

//Circumference of a circle
circleCir(6); //radius in inches
function circleCir(r){//function call with 1 parameter
   var circumference = 3.14 * r*2;//output of the function
   console.log("The circumference of the circle is" + " " + circumference + " inches");
};

//Attack of the Bees
wildBees(215);//Weight of animal
function wildBees(weight){//function call with 1 parameter
    var stings =(weight/8.67).toFixed(1);//Output of the function limited to 1 decimal places
    console.log("It takes" + " " + stings + " " + "stings to kill this animal");
};
