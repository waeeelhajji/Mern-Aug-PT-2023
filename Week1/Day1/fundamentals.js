//!-------------------------------Why JS ?

// Single threaded non-blocking language 

//* Developers use JavaScript to build complex interactive websites and browser games, and to connect servers 
//* to websites and web applications. Because of this versatility, it's easy to see why this language is the most 
//* commonly used programming language in the world.

//!-------------------------------Is JavaScript Used for Front-End or Back-End ?
//* Javascript is a client-side language, which technically makes it a front-end language. But with the Node.js framework, 
//* JavaScript can also be used in back-end. Using JavaScript across the whole stack, for both front-end and back-end, is an excellent
//*  practice because it creates a cohesive application. When as much code as possible is all in the same language, it makes it easier to maintain,
//*   manage, update, and build with a single team.


//!-------------------------------What is ECMAScript ?

//* ECMAScript, also known as JavaScript, is a programming language adopted by the European Computer Manufacturer's Association 
//* as a standard for performing computations in Web applications. ECMAScript is the official client-side scripting language of VoiceXML. 
//* ECMAScript is a limited programming model for simple data manipulation.

//!-------------------------------what is es6 ?

//* What is ES6? ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, 
//* it was published in 2015, and is also known as ECMAScript 2015.

//!-------------------------------What is the difference between JavaScript and ES6 ?

//* ES6 and JavaScript belong to "Languages" category of the tech stack. "ES6 code is shorter than traditional JS"
//*  is the top reason why over 98 developers like ES6, while over 1556 developers mention "Can be used on frontend/backend" 
//*  as the leading cause for choosing JavaScript.

//!-------------------------------Comparison between ES5 and ES6 ?


//?---Examples ES5

var name = "Wael"

var age = 56

var LoveCoding = true

var Hobies = ["Coding", "Music", "Movies and series"]

var Id = {
    fullName: "Wael Hajji",
    Age: 56
}

//?---Examples ES6
const example = () => {

    let name = "Wael"

    let age = 56
    let LoveCoding = true
    let Hobies = ["Coding", "Music", "Movies and series"]
}



const hello = {
    fullName: "Wael Hajji",
    Age: 56,
    Address: "B31"
}

// const hello = "eez"

// hello = ["vcbvcbvc"]

//* Variables defined with const cannot be Redeclare.

//* Variables defined with const cannot be Reassigned.

//* Variables defined with const have Block Scope.

//?---Cannot be Reassigned
Id = {
    NoData: "404"
}
Id.Age = "99"
Id.Hobbies = "Music"

//?---Must be Assigned
var YES;
Yes = "yes we can"
// const NoNo;
NoNo = "No we can't"


//!--When to use JavaScript const?

//* Always declare a variable with const when you know that the value should not be changed.

//? Use const when you declare:

//* A new Array
//* A new Object
//* A new Function


//!--Functions

function ES5() {
    console.log("hey Js we miss You ")
}

const ES6 = () => {
    console.log("Say What !!!!")
}

const ES6Plus = () => console.log("Say What !!!!")


//!---------------------------------------What is scope ?

//* The scope is the current context of execution in which values and expressions 
//* are "visible" or can be referenced. If a variable or expression is not in the current scope, 
//* it will not be available for use.

//? JavaScript has the following kinds of scopes:

//* Global scope: The default scope for all code running in script mode.
//* Module scope: The scope for code running in module mode.
//* Function scope: The scope created with a function.


function functionsScope() {
    const x = "declared inside function"; // x can only be used in exampleFunction
    console.log("Inside function");
    console.log(x);
}

// console.log(x); // Causes error

//////////////////////////////////////////////////////////

const x = "declared outside function";

functionsScope();

function functionsScope() {
    console.log("Inside function");
    console.log(x);
}

// console.log("Outside function");
// console.log(x);

function Scope() {
    var zz = "example of Moneim"
    return zz
}
const zzz = Scope()
console.log(zzz)











