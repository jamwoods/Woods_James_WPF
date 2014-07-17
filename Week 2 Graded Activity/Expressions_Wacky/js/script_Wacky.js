/**
 * Created by James Woods
 * Origination Date 7/17/14.
 * Graded Assignment_Wacky
 */

//Scenerio

alert ("This is a space battle to the death. There are two offensive weapons, lasers and missiles. There are two defensive weapons, shields and anti-missile mini-guns.")

//Player gets first move
var initiativePrompt =  prompt("You are being approached by an enemy space Dreadnaught. You can either attack first or defend yourself.","Attack  or Defend"); //prompt to determine travel time. Underlying assumption is that the user is in Utah.
var initiative = initiativePrompt.toUpperCase();
console.log(initiative);

//Player chooses asset
var weaponPrompt =  prompt("Which asset did you deploy? Laser, Missile, Shield or AMM (ANTI-MISSILE MINI-GUN)"); //prompt to determine travel time. Underlying assumption is that the user is in Utah.
console.log(weaponPrompt); //A more robust deployment would force values. Right now this is a free text field and could result in all manner of entries

//Aliens Turn

alert ("What did the enemy do?")

var rand_no1 = Math.random(); //Random # generator to decide computers attack or defense stance. Two possible choices, 1 or 2
rand_no1 = rand_no1 * 2;
rand_no1 = Math.ceil(rand_no1);


if (rand_no1 == "1") //Need to translate the random # of the computer into their move choice. Two options, attack or defend.
{var firstMove = "ALIEN Attack";}
if (rand_no1 == "2")
{var firstMove = "ALIEN Defend";}
console.log(rand_no1);
alert (firstMove)

if (firstMove == "ALIEN Attack") //If the computer attacks which weapon will it use? Another random roll
{var rand_no2 = Math.random();
    rand_no2 = rand_no2 * 2;
    rand_no2 = Math.ceil(rand_no2);
console.log(rand_no2);}

if (rand_no2 == "1") //If the random # is 1 a laser is fired
{var secondMove = "ALIEN Laser";}


if (rand_no2 == "2") //If the random # is 2 a Missile is fired
{var secondMove = "ALIEN Missile";}


if (firstMove == "ALIEN Defend") //The ability to input a letter is a convenience afforded to the user but we still need to translate those selection to actual travel time.
{var rand_no2 = Math.random();
    rand_no2 = rand_no2 * 2 + 2 ;//Needed to add the + 2 to move the random roll out by two. It seems to be working
    rand_no2 = Math.ceil(rand_no2);
console.log(rand_no2);}

if (rand_no2 == "3")
{var secondMove = "ALIEN Shield";}
console.log(rand_no2)


if (rand_no2 == "4")
{var secondMove = "ALIEN Amm";}
console.log(rand_no2)
alert (secondMove)

var battle=[initiativePrompt, firstMove, weaponPrompt, secondMove]//Collect all choices for battle report using array

alert ("Battle Results:" + " " + battle.toString());// battle report
