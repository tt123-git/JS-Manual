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

// Module 4

// Creating Array

//Typical array style
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

//Accessing Array Elements, including first and last

//access an array element by referring to the index number:
console.log(cars[cars.length - 3]); //access to first
console.log(cars[cars.length - 1]); // access to end
//Changing an Array Element
//Changing element from "Saab" to "Opel"
cars[0] = "Opel";
console.log(cars[0]);

//Length Property
console.log(cars.length);

//Looping over Array Elements
//This loop will loop until reach to numbers of cars.length
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

//Difference between Arrays & Objects

/**
 * You should use objects when you want the element names to be strings (text).
   You should use arrays when you want the element names to be numbers.
 */
   const point = new Array(40, 100, 1, 5, 25, 10); //Array
   const points = [40, 100, 1, 5, 25, 10]; // Object


  console.log(point);
  console.log(points);

  //Converting Arrays to Strings

  //This method can convert from array to string
  console.log(cars.toString());

  //push(), pop()

  //Popping items out of an array, or pushing items into an array.

  let po = cars.pop(); // delete BMW
  //console.log(po);
  console.log(cars);

  let p = cars.push("Honda"); // Add Honda
  //console.log(p);
  console.log(cars);
  

  //shift(), unshift()

  /**
   * The shift() method removes the first array element and "shifts" all other elements to a lower index.
   * 
   * The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
   */

  console.log(cars.shift());
  let un = cars.unshift("Nissan");
  console.log(un);

  //Concatenating/Merging Arrays
  /**
   * The concat() method creates a new array by merging (concatenating) existing arrays:
   */

  console.log(cars.concat(points));


  //Flattening an Array
  //Flattening an array is the process of reducing the dimensionality of an array.
  //The flat() method creates a new array with sub-array elements concatenated to a specified depth.
  const myArr = [[1,2],[3,4],[5,6]];
  console.log(myArr.flat());

  //Splicing and Slicing Arrays

  /**
   * The splice() method adds new items to an array.

     The slice() method slices out a piece of an array.
   */

     const fruits = ["Banana", "Orange", "Apple", "Mango"];
     console.log(fruits.splice(2, 1, "Lemon", "Kiwi"));
     console.log(fruits.slice(1));

     //Loops

     //.map()

     /**
      * You can use map() to do something to each item in a collection and create a new collection containing the changed items:
      */
      function toUpper(string) {
      return string.toUpperCase();
    }

    const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

    const upperCats = cats.map(toUpper);

    console.log(upperCats);

    //.filter()

    //You can use filter() to test each item in a collection, and create a new collection containing only items that match:

      function lCat(cat) {
      return cat.startsWith('L');
    }

    const filtered = cats.filter(lCat);

    console.log(filtered);

    //for loop

    // This is same with other langages for loop style

    for(let i = 1; i < 3; i++)
       {
        console.log(upperCats);
       }

       //for...of Loop

       /**
        * you might start i at 1, forgetting that the first array index is zero, not 1.
          you might stop at i <= cats.length, forgetting that the last array index is at length - 1.
          For reasons like this, it's usually best to use for...of if you can.
        */

       for (const cat of cats) {
          console.log(cat);

      //break Statement  

      /**
       * It's the same with loops — a break statement will immediately exit the loop and make the browser move on   to any code that follows it.
       */

      for(let i = 1; i < 10; i++)
       {
        if(i == 3) break;
        console.log(upperCats);
       }

       //Continue statement

       /**
        * The continue statement works similarly to break, but instead of breaking out of the loop entirely, it skips to the next iteration of the loop. 
        */

       //This code is skip 3 of multiple

       for (let i = 1; i < 10; i++){
        if (i % 3 == 0){
          continue;
        }
        console.log(i);
      }
      
      console.log('end');

      //while Loop

      /**
       * This works in a very similar way to the for loop, except that the initializer variable is set before the loop, and the final-expression is included inside the loop after the code to run, rather than these two items being included inside the parentheses. The condition is included inside the parentheses, which are preceded by the while keyword rather than for.
       */
      let text = "";
      let i = 1;

      while (i < 3) {
        text += "The number is " + i;
        console.log(text);
        i++;
      }

      //do while

      /**
       * The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.
       */

      let result = '';

      do {
        i = i + 1;
        result = result + i;
      } while (i < 5);

      console.log(result);

      //TDD discribe

      /**
       * Test driven development is way to makes test time shortly. Write fale code before write what I need to write, by doing so we can know which part will excute bug. Also it is need to write collect code before what I need to write. This process makes us understand where is problem and makes prevent unexpected bug.
       */

      //Module 5

      // Query Selectors
      //Query selector can get HTML element by using css
      const myElement = document.querySelector("#myElement");

      //Element Creation
      //Element creation is can make new HTML elemnt
      const div = document.createElement('div');

      //Append Element
      //Append Element can add child element to already existed element
     const div1 = document.querySelector('div');
     const p = document.createElement('p');
     div.appendChild(p);

     //Removing elements
     //Remove Element can remove what I selected

     /**
      *  const element = document.getElementById("myElement");
     element.remove();
      */
    
      
     

     //Altering Elements
     //Altering Elements can change HTML contents, but there are several way to change content by using some methods.
      /**
       *const element1 = document.getElementById('myElement');
      element1.innerHTML = 'New Thing';  
       
       */
      
     

     // Adding Inline
     // Adding Inline is to set style by using set property
     /**
      *const element1 = document.getElementById('myElement');
     element1.style.backgroundColor = 'red'; 
      */
     

     //Editing Attribute
     //Editiong Attribute can edit edit attribute
     /**
      * const element = document.getElementById("myElement1");
      element.setAttribute('class', 'newClass');
      */

      //Working with Classes
      //Javascript can also work with html classes.
      div.classList.add('new');                                      
      // adds class "new" to your new div

      div.classList.remove('new');                                   
      // removes "new" class from div

      div.classList.toggle('active');                                
      // if div doesn't have class "active" then add it, or if
      // it does, then remove it

      // Adding Text Content
      //Javascript can add text content to html
      div.textContent = 'Hello World!'                               
      // creates a text node containing "Hello World!" and
      // inserts it in div
      //Adding HTML Content
      div.innerHTML = '<span>Hello World!</span>';                   
      // renders the HTML inside div

      //How to defer a <script> tag until the page loads

      /**
       * To defer a <script> tag until the page loads, you can use the defer attribute. This tells the browser to download and parse the script in the background while the rest of the page is being loaded, but to defer executing the script until the page has finished loading
       */
      //getElementsByTagName
      //getElementsByTagName can get info by Tag Name
      const collection = document.getElementsByTagName("li");

      //getElementsByClassName
      //getElementsByClassName can get info by class name
      const collection1 = document.getElementsByClassName("example");

      //getElementById
      //getElementById can get info by element id
      const demo = document.getElementById("demo");

      //Event

      //Button method 1
     //<button onclick="alert('Hello World')">Click Me</button>
      /**
       * This solution is less than ideal because we’re cluttering our HTML with JavaScript. Also, we can only set one “onclick” property per DOM element, so we’re unable to run multiple separate functions in response to a click event using this method.
       */

      //Button method 2
      //This method is select by id name and add onclic method
      /**
       *const btn2 = document.querySelector('#btn2');
       btn2.onclick = () => alert("Hello World"); 
       */
       

       //Module 3 
       // This method using EventListener, when clicked button, pup up hello world
       /**
        * const btn = document.querySelector('#btn');
       btn.addEventListener('click', () => {
        alert("Hello World");
       });

       //Passing a parameter into your event listener function
       //myParam and event passed to myFunction();
       
       const myButton = document.querySelector('#myButton');

       const myFunction = (event, myParam) => {
          
       console.log(myParam);
        };

       myButton.addEventListener('click', (event) => {
       myFunction(event, 'Hello World');
        });
        * 
        */
       


        //Attaching listeners to a Group of Nodes
        //This is select all button using querySelector,forEach method to iterate through each button and alert button ID
        /**
         * <div id="container">
    <button id="1">Click Me</button>
    <button id="2">Click Me</button>
    <button id="3">Click Me</button>
    <script>
      const buttons = document.querySelectorAll('button');

      // we use the .forEach method to iterate through each button
      buttons.forEach((button) => {

        // and for each one we add a 'click' listener
        button.addEventListener('click', () => {
          alert(button.id);
        });
      });
    </script>
         */

    //Some useful events besides "click"

    /**
     * "load" event: This event is triggered when the page and all its assets (images, videos, etc.) have finished loading.

       "submit" event: This event is triggered when a form is submitted.
       "keydown" event: This event is triggered when a key on the keyboard is pressed down.

       "keyup" event: This event is triggered when a key on the keyboard is released.
     */
      
}

//Module 6

//Creating an empty object
//This is how to create empty object
let user = {}; 
console.log(user);

//Creating an object with "key: value" pairs
//Key is content or value of object.
const person = {
  name: 'John',
  age: 30,
  profession: 'Engineer'
};

console.log(person.profession);

//How to access property values of an object
//You can access property value using both of ways, use dot and brackets.
console.log(person.name);
console.log(person["age"]);

//How to add new "key: value" pairs
//this is how to add key value, also you can use both of way.
person.color = 'red';
person['city'] = 'Bremerton';
console.log(person.color);
console.log(person.city);

//How to delete "key: value" pairs
//In order to delete key value is using delete.

delete person.color;
console.log(person);

//When you need to use square bracket notation, instead of dot access

/**
 * The dot requires the key to be a valid variable identifier. That implies: contains no spaces, doesn’t start with a digit and doesn’t include special characters ($ and _ are allowed).

There’s an alternative “square bracket notation” that works with any string:
 */

//The in operator
// In is useful when I want to confirm property exist in an object
console.log('age' in person);

//For in loop
/**
 * The for...in loop is a JavaScript loop statement used to iterate over the enumerable properties of an object. It allows you to loop through all the keys (property names) of an object, including those inherited from its prototype chain.
 */

for (let key in person) {
  
  console.log( key ); 
  console.log(person[key] ); 
}

//The this keyword
/**
 * The this keyword refers to the current object the code is being written inside, also if you want to create more than two, "this" is useful 
 */

const person1 = {
  name: "Chris",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};

const person2 = {
  name: "Deepti",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};

person1.introduceSelf(); 
person2.introduceSelf();

//Constructors

//The constructor method is a special method of a class for creating and initializing an object instance of that class.
class Polygon {
  constructor() {
    this.name = 'Polygon';
  }
}

const poly1 = new Polygon();

console.log(poly1.name);

//.forEach
// array method of forEach is same with other langages for each. This code excute along with call back function, so numbers will excute in order.
const array = [1, 2, 3, 4, 5];

array.forEach(function(element) {
  console.log(element);
});

//.indexOf
//This can check numbers from array, for this case, 3 will return 2 but if number doesn't exsist in array, it return -1.

const index = array.indexOf(3);
console.log(index); 

const notFoundIndex = array.indexOf(6);
console.log(notFoundIndex); 

//.lastIndexOf
//This is oppsite version compare with .indexOf, .lastIndexOf check number from back. 
const lastIndex = array.lastIndexOf(3);
console.log(lastIndex);

const notFoundIndex1 = array.lastIndexOf(6);
console.log(notFoundIndex1); 

//.find
//This is check array content with condition , in this case is grater than 2, so return 3
const foundElement = array.find(function(element) {
  return element > 2;
});

console.log(foundElement); 

//.sort
//This is sort arry by unicde order, this also same wtih string.
const array1 = [3, 1, 5, 2, 4];

array.sort();

console.log(array);

//.reverse
//This is makes reverse array content order

array.reverse();

console.log(array); 

//.split
//This can split by canma or reguler experession's operater

const str1 = "apple,banana,cherry,date";

const array2 = str.split(",");

console.log(array); 

//.join
// This can return array content by string with defined operater like canma
const str2 = array2.join(",");

console.log(str);

//.reduce
//.reduce is return accumilater value

const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); 

//.isArray
//This can check array or not, then return ture o not

console.log(Array.isArray(array)); 

const notArray = "Hello";

console.log(Array.isArray(notArray));

//JSON Syntax Rules
/**
 * 
Data is in name/value pairs
Data is separated by commas
Curly braces hold objects
Square brackets hold arrays
 */
//Converting from JSON text to a Javascript object

//First, I need to perse from JSON data to javascript object, after the perse, you can convert to javascript object

const jsonString = '{"name": "John", "age": 30, "isStudent": false}';

const jsonObject = JSON.parse(jsonString);

console.log(jsonObject); 

//How to access data in JSON hierarchy (include example of deeply nested data)
//In order to access nested JSON hierarchy is using dot, then I can  access them. 
const data = {
  name: "Tohn",
  age: 22,
  contact: {
    email: "tatsmi@example.com",
    phone: {
      home: "123-456-7890",
      work: "987-654-3210"
    }
  },
  address: {
    street: "123 Main St",
    city: "New York",
  }
};

console.log(data.contact.email);
console.log(data.address.city);

//How to validate JSON
// I need to use parse before start access them

const jsonObject1 = JSON.parse(jsonString);

console.log(jsonObject1); 