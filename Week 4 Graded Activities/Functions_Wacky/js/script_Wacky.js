/**
 * Created by James Woods
 * Origination Date 7/30/14.
 * Graded Assignment_Functions_Wacky
 */


//How far can you get on table scraps when fueling the flux capacitor of your Delorean
//1 banana peel = 3 energy units
//a handful of bread crust = 2 energy units
//A filter of coffee grounds = 4 energy unit
//An apple core = 1 energy unit
//one unit of energy allows you to travel 100 miles


var trash = ["bananna peel, apple core, coffee grounds"];//Array of random trash components found

alert("You have just discovered a garbage cache composed of the following items:" + " " + trash[0]+".");
alert("You are 500 miles away from your destination. Will you make it?");

var bananna = 2;//designated energy values for bananna
var bread = 1;//designated energy values for bread
var coffee = 3;//designated energy values for coffee
var apple= 1;//designated energy values for apple

var energy = bananna + apple + coffee//Adding up the energy values of each piece of trash
console.log(energy)


fluxFuel(energy);//one argument
function fluxFuel(energy){//function call with 1 parameter

    var distance = energy * 100//conversion of energy into distance
    console.log(distance);
    var destination = energy * 100 > 500 ? "You made it!" : "You are only going to be able to clear" + " " + distance + " " + "miles, better look for some more garbage";//check to see if you can make it
    console.log(destination);
    alert(distance)
};

fluxFuel(2);//test with different mileage



