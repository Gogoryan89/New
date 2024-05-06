"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log("text")
    num = 10;
}

showFirstMessage("Hello World");
console.log(num);

function calc(a,b) {
    return (a + b);
}

console.log(calc(4,3));
console.log(calc(5,6));
console.log(calc(10,6));

function ret() {
    let num = 50;

    return num;
}

const logger = function() {
    console.log("Hello");
};

logger();

const calc = (a, b) => a + b;

const str = "test";
console.log(str.length);

const arr = [1, 2, 4];
console.log(arr.length);

const logg = "Hello world"

console.log(logg.slice(6, 11));

console.log(logg.substring(6, 11));

console.log(logg.substr(6, 5));

// const num = 12.2;
// console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(text));