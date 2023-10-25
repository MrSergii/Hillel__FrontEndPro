'use strict';

const number = 30;
const string = "Доброго вечора, шановний"
const boolean = true;
const nullIsObject = null;
let empty;
const bigInt = 126541n
const symbol = Symbol('description');
let obj = {
    name: "Сергей",
    age: 30
}
let arr = ["Украина", "Германия", "Франция", "Испания"];

console.log(typeof(number));
console.log(typeof(string));
console.log(typeof(boolean));
console.log(typeof(nullIsObject));
console.log(typeof(empty));
console.log(typeof(bigInt));
console.log(typeof(symbol));
console.log(typeof(obj));
console.log(typeof(arr));


