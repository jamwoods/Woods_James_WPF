/**
 * Created by James Woods
 * Origination Date 7/17/14.
 * Graded Assignment_Wacky
 */

//Scenerio

//alert ("The rules. This is a space battle to the death. There are two offensive weapons, lasers and missiles. There are two defensive weapons, shields and anti-missile mini-guns.")

//Player gets first move
//var initiativePrompt =  prompt("You are being approached by an enemy space Dreadnaught. You can either attack first or defend yourself.","Attack  or Defend"); //prompt to determine travel time. Underlying assumption is that the user is in Utah.
//var initiative = initiativePrompt.toUpperCase();
//console.log(initiative);

//Player chooses asset
//var weaponPrompt =  prompt("Which asset did you deploy? Laser, Missile, Shield or AMM (ANTI-MISSILE MINI-GUN)"); //prompt to determine travel time. Underlying assumption is that the user is in Utah.
//console.log(weaponPrompt);

//Aliens Turn

//alert ("What did the enemy do?")

var rand_no1 = Math.random(); //Random # generator to decide computers attack or defense stance
rand_no1 = rand_no1 * 2;
rand_no1 = Math.ceil(rand_no1);


if (rand_no1 == "1") //Need to translate the random # of the computer into their move choice
{var firstMove = "ALIEN ATTACK";}
if (rand_no1 == "2")
{var firstMove = "ALIEN DEFEND";}
console.log(rand_no1);
alert (firstMove)

if (firstMove == "ALIEN ATTACK") //If the computer attacks which weapon will it use? Another random roll
{var rand_no2 = Math.random();
    rand_no2 = rand_no2 * 2;
    rand_no2 = Math.ceil(rand_no2);
console.log(rand_no2);}

if (rand_no2 == "1") //If the random # is 1 a laser is fired
{var secondMove = "ALIEN LASER";}


if (rand_no2 == "2") //If the random # is 2 a Missile is fired
{var secondMove = "ALIEN MISSILE";}


if (firstMove == "ALIEN DEFEND") //The ability to input a letter is a convenience afforded to the user but we still need to translate those selection to actual travel time.
{var rand_no2 = Math.random();
    rand_no2 = rand_no2 * 2 + 2 ;
    rand_no2 = Math.ceil(rand_no2);
console.log(rand_no2);}

if (rand_no2 == "3") //The ability to input a letter is a convenience afforded to the user but we still need to translate those selection to actual travel time.
{var secondMove = "ALIEN SHIELD";} //2 hours transit
console.log(rand_no2)


if (rand_no2 == "4") //The ability to input a letter is a convenience afforded to the user but we still need to translate those selection to actual travel time.
{var secondMove = "ALIEN AMM";} //2 hours transit
console.log(rand_no2)
alert (secondMove)

var battle=[initiativePrompt, firstMove, weaponPrompt, secondMove]//Collect all choice for battle report using array

alert ("Battle Results:" + " " + battle.toString());// battle report

//if (firstMove = "DEFEND") /q/The ability to input a letter is a convenience afforded to the user but we still need to translate those selection to actual travel time.
//{var rand_no2 = Math.random();
  //  rand_no2 = rand_no2 * 3-4;
    //rand_no2 = Math.ceil(rand_no2);
    //console.log(rand_no2);}



/*

//*alert ("The rules. This is a space battle to the death. There are two offensive weapons, lasers and missiles. There are two defensive weapons, shields and anti-missile mini-guns. Lasers tear down shields, shields repel missiles.The object of the game is to destroy the other ship.");

/*
var initiativePrompt =  prompt("You are being approached by an enemy Dreadnaught. You can either attack first or defend yourself.","Do you A (ATTACK) or D  DEFEND?"); //prompt to determine travel time. Underlying assumption is that the user is in Utah.
var initiative = initiativePrompt.toUpperCase();
console.log(initiativePrompt);

var weaponPrompt =  prompt("Which asset did you deploy? Attack = L(LASER) or M (MISSILE). Defend = S (SHIELD) or AMM (ANTI-MISSILE MINIGUN)"); //prompt to determine travel time. Underlying assumption is that the user is in Utah.
console.log(weaponPrompt);

var battle=[initiativePrompt,weaponPrompt]
console.log(battle);

//var battle=[initiativePrompt,weaponPrompt]
console.log(battle);

//have the array tell them the moves

//var randomNumber1=Math.floor(Math.random()*11)
//console.log(randomNumber1)


//var randomnumberPrompt1 = prompt(Math.floor(Math.random()*11));

//var randomnumberPrompt2 = prompt(Math.floor(Math.random()*11));

//var randomnumberPrompt3 = prompt(Math.floor(Math.random()*11));

/*

var daysPrompt =  prompt("Please choose the number of days you will be training this week.","0"); //User selects class delivery length
var trainingDays = parseInt(daysPrompt); //Return user selection as a number
var totalDeliveryHours = trainingDays * 8 //Calculate working hours at 8 hour per deliver day
console.log(totalDeliveryHours);

var locationPrompt =  prompt("Please input your destination as either W, MW or E","Select Location"); //prompt to determine travel time. Underlying assumption is that the user is in Utah.
var locationCase = locationPrompt.toUpperCase();//Forcing to upper case to avoid user input variance.
console.log(locationCase);
if (locationCase == "W") //The ability to input a letter is a convenience afforded to the user but we still need to translate those selection to actual travel time.
{var locationTime = 2;} //2 hours transit
if (locationCase == "MW")
{var locationTime = 4;} //4 hours transit
if (locationCase == "E")
{var locationTime = 6;} //6 hours transit
console.log(locationTime);


alert ("How prepared are you for class? We will factor in the number of times you have taught the class in order to determine prep time");
var classExp =  prompt("Please enter the number of times you have taught this class.","0"); //Prompt box to to collect experience level
var prep = parseInt(classExp); //Insure classExp is recognized as a number and deposited in the prep variable
console.log(prep);

if (prep >= 0 && prep <= 3) //Assign a user selection to one of three categories, each of which imply there own prep time. This is the never to 3 times
{var prepTime = 8;}
if (prep >= 4 && prep <= 8)// The 4 to 8
{var prepTime = 4;}
if (prep >= 9) //The greater than 9
{var prepTime = 1;}
console.log(prepTime);


alert("Your total working hours for this week include" + " " +  (totalDeliveryHours) + " " +  "delivery hours," + " " + (locationTime) + " " + "travel hours," + " " + (prepTime) + " " +  "preparation hours, and finally" + " " + "one hour of post training work for a grand total of" + " " + (Number(totalDeliveryHours)+Number(locationTime)+Number(prepTime)+1) + " " + "hours");
****/