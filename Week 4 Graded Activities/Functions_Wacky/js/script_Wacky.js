/**
 * Created by James Woods
 * Origination Date 7/30/14.
 * Graded Assignment_Functions_Personal
 */


//How far can you get on table scraps when fueling the flux capacitor of your Delorean
//1 banana peel = 3 energy units
//a handful of bread crust = 2 energy units
//A filter of coffee grounds = 4 energy unit
//An apple core = 1 energy unit
//one unit of energy allows you to travel 100 miles


var trash = ["bananna peel, apple core, coffee grounds"];

alert("You have just discovered a garbage cache composed of the following items:" + " " + trash[0]+".");
alert("You are 500 miles away from your destination. Will you make it?");

var bananna = 3;
var bread = 2;
var coffee = 4;
var apple=1;

var energy = bananna + apple + coffee
console.log(energy)


fluxFuel(energy);//function call pulling data from user inputs
function fluxFuel(energy){//function call with 3 parameters.

    var distance = energy * 100>5 ? "You made it!" : "You are only going to be able to reach the" + " " + distance + " " + "mark, better look for some more garbage";
    console.log(distance);
    alert(distance)
};





