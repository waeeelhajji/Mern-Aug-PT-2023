//!-------------------------------What is Destructuring ?

//* Destructuring is a JavaScript expression that makes it possible to unpack values from arrays,
//* or properties from objects, into distinct variables. That is, we can extract data from arrays and
//* objects and assign them to variables



let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]


//?The destructuring assignment uses similar syntax, 
//?but on the left-hand side of the assignment to define what values to unpack from the sourced variable.



const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2

//! Similarly, you can destructure objects on the left-hand side of the assignment.

const obj = { a: 1, b: 2, c: 5 };
const { aaa, baa, ...cc } = obj;
// is equivalent to:
// const Simi = obj.a;
// const larly = obj.b;

// console.log(Simi)
// console.log(larly)
// console.log(cc)

//? For both object and array destructuring, there are two kinds of destructuring patterns:
//?  binding pattern and assignment pattern, with slightly different syntaxes.

//? In binding patterns, the pattern starts with a declaration keyword (var, let, or const). 
//? Then, each individual property must either be bound to a variable or further destructured.



var objectDe = { x: 21, y: -34, z: 47 };

const { w, aa, bb } = objectDe; // x = 21, y = -34, z = 47



//!-------------------------------------------------------- REST / SPREAD

const ninja = {
    firstname: "",
    lastName: "",
    email: ""
}


const obj_copy = { ...ninja }

const FClubs = ["Dortmund", "Barca", "Milan", "PSG"]
const array_copy = [...FClubs]


const example = {
    ...FClubs,
    dojo: "coding",
    coding: "dojo"

}
console.log(example)










































