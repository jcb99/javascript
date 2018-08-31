/*
let a = 7;
let b = "6";
let c = a + b; //This alone (lines 1 - 6) just concatenates 7 and 6 to make "76" the string... the int is forced into a string

console.log("Answer:" + c);
*/

let a = 7; //This function (lines 9 - 14) actually parses the 6 as an int and adds the two together
let b = "6";
b = parseInt(b, 10); //Base ten
let c = a + b;

console.log("Answer:" + c);


let d = parseInt('stuff', 10);
let e = isNaN(d); //NaN stands for Not a Number
console.log(d); //can't parse so it shows up as NaN
console.log(e); //shows up as 'true' bc 'stuff' is not a number
