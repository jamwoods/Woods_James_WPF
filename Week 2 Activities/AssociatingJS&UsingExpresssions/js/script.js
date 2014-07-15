/**
 * The Following is a .js file containing ALL of the activities found within the week two instruction set.
 * Created by jameswoods on 7/14/14
 */

//Printing to the Console

var yearBorn = 1955;
console.log(yearBorn);
console.log("Hello World");

alert("Hello World!");
alert(yearBorn)

//Defining Variables

/*var age;//declaration
age=38; //definition */

var yearOfBirth = 1970; //declaring and defining on the same line

// String and Boolean Variables

var age = 38; //Number Variable
var isStudent = true; //Boolean value
var firstName = "Kermit"; //String value

var kermit = "my friend";
var firstName = kermit;
var phrase = "I don't know"
var phraseSingleQuote = 'I don\'t know'

//Arrays

var muppetNames = ["Kermit", "Miss Piggy", "Gonzo", "Rizo"]; //0,1,2,3
console.log(muppetNames);
muppetNames[1] = "Rizzo";//Change index 1 to Rizzo
console.log(muppetNames[1]);//Let's see what's in the index #1

//Screencast:Expressions

//Example Expressions-Age Example

var yearBorn= 1974;
var age = 2014 - yearBorn;
console.log(yearBorn);

//Arithmetic Operators
//Area of triangle
var width = 4;
var height = 5;
var area = width * height;
console.log(area);

//Using Modulo-Finding the remainder

var remainder = 32/10;
console.log(remainder);

var remainder = 32 % 10;
console.log(remainder);

//Order of Operations-Please Excuse Me My Dear Aunt Sally

var quiz 1 = 87;
var quiz 2 = 100;
var quiz 3 = 60;
var quiz 4 = 80;

var average = (quiz1 + quiz2 + quiz3 + quiz4/4);
console.log(average);

var length = 7;
var width = 6;
var perimeter = length * 2 + width * 2;
console.log(perimeter);

//Concatenating strings

var firstName = "Kermit";
var lastName = "The Frog";
var fullName= firstName + " " + lastName;

// Casting-Treating String like Numbers...

var stringVar = "6";
var result  = 7 + Number(stringVar);
console.log(result);

var areaCode = 407;
var firstPart= 203;
var secPart = 4529;
var phoneNo= areaCode + firstPart + secPart; //No good, adds up the numbers. Need to treat each as a string an concatenate the string.
console.log(phoneNo);

//Assignment Operators

var a = 3;
a = a + 4;// a+= 4;
console.log(a);























