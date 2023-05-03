// How to Declare Variables in JS

let message; // Variable declaration
message = 'Hello!'; // Assigning a value to a variable
console.log(message); // shows the variable content

// Operators
let x = 1, y = 3;
console.log( y - x ); // 2, binary minus subtracts values

let a = 1, b = 2;
console.log(a + b); // answer will be 3

let c = 2, d = 3;
console.log(c * d); // answer will be 6

let e = 6, f = 3;
console.log(e / f); // answer will be 2

console.log( 5 % 2 ); // 1, the remainder of 5 divided by 2

console.log( 2 ** 3 ); // 2³ = 8

console.log( '24' + 2 ); // "242"

// Working w/ Numbers
/*
NaN is a JavaScript reserved word indicating that a number is not a legal number.
Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number): */

// Working w/ Strings
/*
Escaping characters means that we do something to them to make sure they are recognized as text, not part of the code. In JavaScript, we do this by putting a backslash just before the character. Try this:
*/
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth); //I\'ve got no right to take my place…


//Template literals (backticks and variables!)
const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"
/*
A template literal looks just like a normal string, but instead of using single or double quote marks (' or "), you use backtick characters (`):
*/

//slice() extracts a part of a string and returns the extracted part in a new string.
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(part); //Banana

/*
substring() is similar to slice().

The difference is that start and end values less than 0 are treated as 0 in substring().
*/

let str = "Apple, Banana, Kiwi";
let part1 = str.substring(7, 13);
console.log(part1); //Banana
/*
The replace() method replaces a specified value with another value in a string: */

let text2 = "Please visit Microsoft!";
let newText = text2.replace("Microsoft", "W3Schools");
console.log(newText); //Please visit W3Schools!
// A string is converted to upper case with toUpperCase():

let text1 = "Hello World!";
let text3 = text1.toUpperCase();
console.log(text3); //HELLO WORLD!

// A string is converted to lower case with toLowerCase():

let text4 = "Hello World!";       
let text5 = text1.toLowerCase();
console.log(text5); //hello world!

//concat() joins two or more strings:

let text6 = "Hello";
let text7 = "World";
let text8 = text6.concat(text7);
console.log(text8); //Hello World

// The trim() method removes whitespace from both sides of a string:

let text9 = "      Hello World!      ";
let text10 = text9.trim();
console.log(text10); //Hello World!


/*The padStart() method pads a string from the start.

It pads a string with another string (multiple times) until it reaches a given length. */

//Pad a string with "0" until it reaches the length 4:

let text11 = "0";
let padded = text11.padStart(4,"0");
console.log(padded); //0005

//The charAt() method returns the character at a specified index (position) in a string:

let text12 = "HELLO WORLD";
let char = text12.charAt(0);
console.log(char) //H

// A string can be converted to an array with the split() method:
/*
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe
*/
let yyy = "a,b,c,d,e";
const xxx = yyy.split(",,,,");
console.log(xxx); //abcde
// Conditional Statements

//Comparisons
console.log( 2 > 1 );  // true (correct)
console.log( 2 == 1 ); // false (wrong)
console.log( 2 != 1 ); // true (correct)

//String comparison
console.log( 'Z' > 'A' ); // true
console.log( 'Glow' < 'Glee' ); // false
console.log( 'Bee' > 'Be' ); // true

//Comparison of different types
/*
When comparing values of different types, JavaScript converts the values to numbers. */

console.log( '2' > 1 ); // true, string '2' becomes a number 2
console.log( '01' == 1 ); // true, string '01' becomes a number 1

//For boolean values, true becomes 1 and false becomes 0.

console.log( true == 1 ); // true
console.log( false == 0 ); // true

//Strict equality
console.log( 0 === false); // false, because the types are different
console.log( true !== 1); // true
console.log( false == 0); // true
console.log( false != 0 ); // false

//Conditional statements: if, else
let aaa = true;
if(aaa = true)
{
  console.log("Hello") //Hello
}
else
{
  console.log("World")
}

//Conditional statements:else , if

let bbb = true;
if(bbb = false)
{
   console.log("Hiii")
}
else if(bbb = true)
{
   console.log("Heyyy") //Heyyy
}

//Logical operators: AND

let ccc = 1; 
let ddd = 1

if(ccc == 1 && ddd == 1)
{
  console.log("uoooo") //uoooo
}

//Logical operators: OR
if(ccc == 1 || ddd == 1)
{
  console.log("woooo") //woooo
}

//Logical operators: Not And
if(!(ccc == 1 && ddd == 1))
{
  console.log("uoooo")
}
else
{
  console.log("yooo") //yooo
}

//switch statement
//Similer to if else statement
let expr = 'Morning';
switch (expr) {
  case 'Morning':
    console.log('Good Morning!!!') //Good Morning!!!
    break;
  case 'Night':
    console.log('Good Night!!!');
    break;
}

//Ternary operator

//This is abbreviation of if else statement, also it is useful 
//sometiong I want to test if else statement.

let sss = 'AAAA'

  sss  = 'AAAA'
  ? console.log("BBBBB") //BBBBB
  : console.log("CCCCC");

  // Module 3 

  //invoke function

  /*
  to actually use a function after it has been defined, you've got to run — or invoke — it. This is done by including the name of the function in the code somewhere, followed by parentheses.
  */
 //invoking is useful when I want to inveke funktion anytime and anywhere.
  function myFunction() {
    alert('hello');
  }
  
  myFunction();

//Defining functions

//creating a reusable block of code that performs a specific task.

//Defining functions is to make block for use many times.
  function addNumbers(a, b) {
    return a + b;
  }

  //Anonymous Function

/*
This is called an anonymous function, because it has no name. You'll often see anonymous functions when a function expects to receive another function as a parameter. In this case the function parameter is often passed as an anonymous function.
*/

// You can use Anonymous Function when you want to add variables.
  (function () {
    alert('hello');
  })

  //Arrow functions
  /*
If you pass an anonymous function like this, there's an alternative form you can use, called an arrow function. Instead of function(event), you write (event) =>:
If the function only has one line in the curly brackets, you omit the curly brackets:
  */
//You can make code more brief

let hello;

hello = () => "Hello World";
console.log(hello());

//Scope

/*
Let's talk a bit about scope — a very important concept when dealing with functions. When you create a function, the variables and other things defined inside the function are inside their own separate scope, meaning that they are locked away in their own separate compartments, unreachable from code outside the functions.

The top level outside all your functions is called the global scope. Values defined in the global scope are accessible from everywhere in the code.
*/ 

/**
 * There is two kinds of scopes. First one is grobal scope,
 this is can acces from script. It's similer to public in C#.
 Second one is local scope. It's can access from only function.
 * */

const name1 = 'Chris';
function greeting() {
  alert(`Hello ${name1}: welcome to our company.`);
}

//Return Value

/**
 * When the function completes (finishes running), it returns a value, which is a new string with the replacement made. In the code above, the result of this return value is saved in the variable newString.

If you look at the replace() function MDN reference page, you'll see a section called return value. It is very useful to know and understand what values are returned by functions, so we try to include this information wherever possible.

Some functions don't return any value. (In these cases, our reference pages list the return value as void or undefined.) For example, in the displayMessage() function we built in the previous article, no specific value is returned when the function is invoked. It just makes a box appear somewhere on the screen — that's it!
 */

const myText = "The weather is cold";
const newString = myText.replace("cold", "warm");
console.log(newString); 
// Should print "The weather is warm"
// the replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made

//Default values

/**
 * In this example, the greet function takes a name parameter, which defaults to 'Guest' if no value is provided. When the function is called with no arguments, it uses the default value of 'Guest' and prints "Hello, Guest!" to the console. When the function is called with the argument 'John', it uses that value instead and prints "Hello, John!" to the console.
 */

//zin this ex, Hello is defalt value, name varianle can chage other name but usually I don't change hallo to other word.

function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}

greet(); 
greet('John'); 

//Call Stack

/**
 * Call stack is a mechanism used by the language to keep track of function calls in a program. It is a data structure that stores information about the active functions in the program and the order in which they were called.
 */

//Call stack is based on Last-In, First-Out structure. 

const function1 = () => {
  console.log("start");
};
const function2 = () => {
  console.log("next");
}
const function3 = () => {
  console.log("end");
}

function1();
function2();
function3();

// Different types of errors

/**Type Error
 * The TypeError object represents an error when an operation could not be performed, typically (but not exclusively) when a value is not of the expected type.
 */