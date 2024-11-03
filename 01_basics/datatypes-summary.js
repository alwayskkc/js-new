// PRIMITIVE DATATYPES => call by value

// 7 types: String, Number, Boolean, BigInt, null, undefined, Symbol

// Java Script is dynamically typed language


// REFERENCE (Non-primitive) => call by reference

// Array, Objects, Functions
/*
const id = Symbol('123')
const iid = Symbol('123')
*/
//console.table(id == iid)

//const bigNumber = 8893484983409384093n

//console.log(typeof bigNumber)

const heroes = ["Ironman", "Wanda", "Cap"]
let myObj = {
    name: "Chaitu",
    age: 25
}
console.log(myObj.name)

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof myObj);
console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3
