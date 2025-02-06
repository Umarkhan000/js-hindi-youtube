// To store datatypes in the memory are 2 tpes
// 1. primitive 
// 2. non primitive

// 1. primitive are 7 Types : String, Number, Boolean, null, Undefined, Symbol, BigInt
// primitive datatypes are also called as call by value

const score = 50
const scoreValue = 88.4

const isLoggedIn = true
const outsideTemp = null
let userEmail; 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 8846387102654


// 2. Non primitive are 3 types : Array, Objects, Functions
// Non primitive datatype are also called as Reference by value

const heros = ["kohli", "rohit", "ABD"];  //Arrays are written in square brackets

let myObj = {
    name : "umarkhan",
    age : 21,

}
// objects are written in curly braces as obove and objects are stored in variables as shown above

const myFunction = function(){
    console.log("Hello world");
} 

console.log(typeof myFunction);   // To find datatype of anything then use console.log(typeof   ) 

// To read datatypes and its return type then use below link
// https://262.ecma-international.org/5.1/#sec-11.4.3 

