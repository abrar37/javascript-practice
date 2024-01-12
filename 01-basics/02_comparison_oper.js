"use strict"; // treat all js code as newer version

// alert("Hello alert") 

// let isLoggedIn = false // boolean

// number => 2
// bigint
// string = "Quick"
// num = standalone value
// undefined
// symbol 

// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof symbol);

// let score = "33"
let score = false

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(valueInNumber);
// console.log(typeof valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1 : false => 0 

let isLoggedIn = 0
let booleanConversion = Boolean(isLoggedIn)
// console.log(booleanConversion);

//=============== Operations ===============
let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2/3);
// console.log(2*2);
// console.log(2**2);
// console.log(11%2);

let str1 = "Hello"
let str2 = " Arqam"
// console.log(str1 + str2);
// console.log(1 + 2);
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 3);
// console.log(1 + 2 + "3");

// console.log(+true);
// console.log(+"");

// let num1, num2, num3
// num1 = num2 = num3 = 2+2  // Never Use Confused code syntex
// console.log(num1);

let gameCounter = 50;
// gameCounter++;
++gameCounter;
// console.log(gameCounter);


console.log("2" == 2);
console.log("2" === 2); // strict check including data type


// console.log(null > 0);
// console.log(null == 0); // Comparison operator "> or <" treated "null" as a 0 but "==" not treated as 0
// console.log(null >= 0);


console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);