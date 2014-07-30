/**
 * Created by James Woods
 * Origination Date 7/29/14.
 * Week 4 Functions Worksheet
 */

//Circumference of a circle
circleCir(6); //Arguments presumably to be supplied by visitor input
function circleCir(r){//function call with 1 parameter
   var circumference = 3.14 * r*2;//output of the function
   console.log("The circumference of the circle is" + " " + circumference);
};

//Attack of the Bees
circleCir(215);//Weight of animal
function circleCir(weight){//function call with 1 parameter
    var stings =(weight/8.67).toFixed(2);//Output of the function limited to 2 decimal places
    console.log("It takes" + " " + stings + " " + "stings to kill this animal");
};
