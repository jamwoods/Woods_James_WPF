/**
 * Created by James Woods
 * Origination Date 7/16/14.
 * Graded Assignment_Industry
 */

//Hours worked in a week
//alert ("Let's calculate the number of hours you will be working this week as a Corporate Trainer.");
//alert ("Your total hours are comprised of four primary tasks which are prep, travel, delivery and post training.");
//alert ("The two largest fluctuating variables will be travel destination and class duration");
//alert ("Classes run from 1 day to 5 days and travel will be either to the West Coast, Mid West or East Coast");

var daysPrompt =  prompt("Please choose the number of days you will be training this week.","0"); //prompt box to gather human years from user
var trainingDays = parseInt(daysPrompt); //Setting humanYears variable equal to value obtained from prompt box
var totalDeliveryHours = trainingDays * 8
console.log(totalDeliveryHours);

var locationPrompt =  prompt("Please input your destination as either W, MW or E","Select Location"); //prompt box to gather human years from user
var locationCase = locationPrompt.toUpperCase();
console.log(locationCase);
if (locationCase == "W")
{var locationTime = 2;}
if (locationCase == "MW")
{var locationTime = 4;}
if (locationCase == "E")
{var locationTime = 6;}
console.log(locationTime);


alert ("How prepared are you for class? We will factor in the number of times you have taught the class in order to determine prep time");
var classExp =  prompt("Please enter the number of times you have taught this class.","0"); //prompt box to
var prep = parseInt(classExp); //Setting humanYears variable equal to value obtained from prompt box
console.log(prep);

if (prep >= 0 && prep <= 3)
{var prepTime = 8;}
if (prep >= 4 && prep <= 8)
{var prepTime = 4;}
if (prep >= 9)
{var prepTime = 1;}
console.log(prepTime);




//alert("Your total working hours for this week include" + " " +  (product) + " " +  "was originally" + " " + "$"+(price) + " " + "but after a" + " " + (discountPercent)+"%" + " " +  "discount it is now" + " " + "$"+ (discountedPrice) + " " + "without tax, and" + " " + "$"+(totalTotal) + " " + "with tax");

/*
var dogYears = humanYears * 7; //Calculating dog years by multiplying value in humanYears by 7
console.log(dogYears);

//Alert showing final calculation with friendly verbiage.
alert("Sparky is" + " " +  (humanYears) + " " +  "human years old which is" + " " +  (dogYears) + " " + "in dog years");

//Slice of Pie part 1
var pizzaSlice = 8; //Slices per pizza
var peopleCount = 24; //Total people at the party
var pizzaCount = 10; //Total number of pizzas
var slicesPer = parseFloat(pizzaSlice*pizzaCount/peopleCount) //Slices per person calculation using decimals
console.log(slicesPer);

//Slice of Pie part 2-How many is Sparky going to get-count only whole pieces.
var sparkySlice = (slicesPer-3) * 24; //Calculation of # of slices Sparky gets. This multiplies the remainder by the number of people.
var sparkySliceRound = parseInt(sparkySlice) //This calculation removes the decimal. Rounded up.
console.log(sparkySliceRound);

/Alternative slice of pie part 2/

var remainder = slicesPer % peopleCount;
console.log(remainder);

//Average shopping bill
var shoppingBills=[80,65,110,89,76]; //An array of each weeks shopping bill.
var shoppingTotal=shoppingBills[0] + shoppingBills[1] + shoppingBills[2] + shoppingBills[3] + shoppingBills[4]; //Total spent
console.log(shoppingTotal);
var shoppingAverage=shoppingTotal/5 //Average of each shopping bill
console.log(shoppingAverage);

//Discounts
var price = 120; //list price
var discountPercent = 20; //discount percentage
var product = "Super Cool Fancy Widget"; //Product name
var tax = .0675
var discountedPrice= price - price*.20;
console.log(discountedPrice);
var priceTax= parseFloat(price*tax + price);
console.log(priceTax);
var totalTotal= parseFloat(discountedPrice*tax + discountedPrice);

alert("Your" + " " +  (product) + " " +  "was originally" + " " + "$"+(price) + " " + "but after a" + " " + (discountPercent)+"%" + " " +  "discount it is now" + " " + "$"+ (discountedPrice) + " " + "without tax, and" + " " + "$"+(totalTotal) + " " + "with tax");
    */