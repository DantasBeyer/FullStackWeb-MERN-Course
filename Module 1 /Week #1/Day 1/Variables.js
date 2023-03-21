// Variable declaration with "let":
let name; // <== variable declaration

// We can declare muntiple variables with the same "let" keyword:
let  Age, Email, Profession;


/* After we declare a variable, the next step is to store some value in it.
Tis process is called "variable initialization". You can do variable initialization
at the time of variable criation (when you declare it) or at a later poit */

// To put some data into the variable we use the assignment operator "=".
let student;
student = "Joao";

// You can also assign a value at the time of the declaration.
let age = 32;

/*  !! If you don´t assign a value to a variable  when you declare it, its default value 
will be initialized to "underfined" !! */

// NAMING A VARIABLE 

/* Names can contain letters (uppercase and lowercase), numbers and the symbols _ and $.
The first character of the name can’t be a number.
JavaScript allows a large variety of characters as variable names, 
so if you need to use ñ, ö or even π, you can. Make sure your editor saves files with UTF-8 encoding. 
All these examples are valid variable names: */

/*  When creating a variable with more than one word, we use the “camelCase” style.
Words or abbreviations in the middle of the phrase begin with a capital letter. 
The purpose of this practice is to enhance readability. */

let a; // the name is a, with let you are only introducing a variable.
let color;
let _private;
let $button;
let getTop10;
let a_large_name;
let thisWayIsCalledCamelCase;
let π;


//CHANGING VALUES
/* Variables declared using the keyword "let" 
can be manipulated and their values can be changed throught the code: */

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




