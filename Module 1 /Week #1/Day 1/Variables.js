// Variable declaration with "let":
let name; // <== variable declaration

// We can declare muntiple variables with the same "let" keyword:
let  Age, Email, Profession;


/* 
After we declare a variable, the next step is to store some value in it.
Tis process is called "variable initialization". You can do variable initialization
at the time of variable criation (when you declare it) or at a later poit.
*/

// To put some data into the variable we use the assignment operator "=".
let student;
student = "Joao";

// You can also assign a value at the time of the declaration.
let age = 32;

/*  
!! If you don´t assign a value to a variable  when you declare it, its default value 
will be initialized to "underfined" !! 
*/

// NAMING A VARIABLE 

/* 
Names can contain letters (uppercase and lowercase), numbers and the symbols _ and $.
The first character of the name can’t be a number.
JavaScript allows a large variety of characters as variable names, 
so if you need to use ñ, ö or even π, you can. Make sure your editor saves files with UTF-8 encoding. 
All these examples are valid variable names: 
*/

/*  
When creating a variable with more than one word, we use the “camelCase” style.
Words or abbreviations in the middle of the phrase begin with a capital letter. 
The purpose of this practice is to enhance readability. 
*/

let a; // the name is a, with let you are only introducing a variable.
let color;
let _private;
let $button;
let getTop10;
let a_large_name;
let thisWayIsCalledCamelCase;
let π;


//CHANGING VALUES
/* 
Variables declared using the keyword "let" 
can be manipulated and their values can be changed throught the code: 
*/

let favoriteFood; 

favoriteFood = "Steak";
console.log(favoriteFood);

favoriteFood = "Pizza";
console.log(favoriteFood);

// console:
// Steak
// Pizza <== as we can see, the variable changed value from 'Steak' to 'Pizza'


//TIPE CONVERSION 
/*
Basic data types in JavaScript , that you are familia with, are: 
        srting,
        number,
        object,
        array.
*/

// You CAN reassign values and change the data type of variables in JavaScript.

/* 
As we already mentioned, JavaScript is a dynamically typed language and that means
new variables are created at runtime, and the type of variables is determined at runtime.
The type will get determined automatically while the program is being processed and 
you can have the same variable at one point as one type and at some other point as some other type. 
*/
console.log('Value:', favoriteFood, 'Type:', typeof favoriteFood);

favoriteFood = 20;
console.log('Value:', favoriteFood, 'Type:', typeof favoriteFood);

// console:
// Value:  Steak  Type:  string
// Value:  20     Type:  number

/* 
As you can see, the type is changed and this is not necessarily a good thing all the time. 
If you are not careful, this might be a huge headache.
 */

/* 
In order to help yourself and others who work or will work on the same code,
try to use "const" whenever there is a chance to do so.
*/


// Variable declaration with "const"

//const is used when declaring a variable which value will be CONSTANT.
//These variables are called constants and if we try to change its values we will get the error back:

const namE = 'Ana';
namE = 'Maria';
// console:
// unknown: "name" is read-only

/* 
When you are sure a variable will
NEVER CHANGE, you should declare it with "CONST" to guarantee and clearly 
communicate that fact to everyone.
*/

/* 
Unlike being able to declare variables and later to assign the value to them
using let keyword, when using const the variable needs to be assigned some value
in the same moment when the variable is initialized. This comes natural when you
know that variables declared with const can’t be changed later. 
(take this conditionally for now, later you’ll see that in some sense they can
be changed but they can’t be reassigned.) 
*/

let naMe; // <== we can do this
 
const pRice; // <== error 

/* 
To summarize, for now, you can use let or var interchangeably when you expect that
the variable will change its value. However, use const when you’re sure it will remain unchanged.
*/