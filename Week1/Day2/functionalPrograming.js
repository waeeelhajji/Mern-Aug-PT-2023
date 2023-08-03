//!-------------------------------Why is JavaScript a Multi-Paradigm Language ?


// A paradigm can be defined as an approach to solving a problem. A programming paradigm is
//  a way to solve problems by using a programming language.


// As you know, each problem needs a specific approach to its solution. So,
//  we would have a set of paradigms for different sets of problems. As programming
//  languages are a way to solve the problems using the code, they will offer support to these paradigms.

//?--------Object-Oriented Programming Paradigm


//* This is an approach where the solution is designed around communication between
//* the Objects or Classes, which hold the data and the methods to act upon that data.
//* A programming language with this approach will have code with a series of operations
//* involving defining classes and interaction among these classes with the help of associated methods.
//* Some of the languages supporting this paradigm are C++, Java, C#, JavaScript,


//?--------Functional Programming Paradigm

//* This is a declarative approach where the solution is designed around applying and composing functions.
//* A programming language with this approach will have a series of function calls and function compositions,
//* where each function takes an input state and returns consistent output value independent of the program state.
//* Some of the languages supporting this paradigm are Haskell, JavaScript


//?--------Callback Functions

setTimeout(function () {// function
    console.log("go")
}, 3000) // a number
console.log("the race is over")

function callback(input) {
    console.log(input)
}

function parentFunction(callback) {
    callback("information from the child")
}

parentFunction(callback)

//?--------The Big Freeze

const fre = [1, 2, 3, 4]

fre.push(7)

console.log(fre)

const newFreezArray = Object.freeze(fre)

// newFreezArray.push(78)

var arr1 = [1, 2, 3, 4]
var arr2 = [8, 9, 10, 11]

const newArray = arr1.concat(arr2)

console.log(newArray)