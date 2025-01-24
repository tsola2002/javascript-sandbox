// Type Conversion

let nr1 = 4;
let nr2 = "2";
console.log(nr1 * nr2);

const year = '1991';
const age = 23;

console.log(typeof year);
//CONVERTS FROM STRING TO NUMBER
const convertedYear = Number(year);
console.log(typeof convertedYear);

const fraud = 419;
console.log(typeof fraud);

// CONVERTS FROM NUMBER TO STRING
const convertedFraud = String(fraud);
console.log(typeof convertedFraud);

let nrToStr = 6;
nrToStr = String(nrToStr);
console.log(nrToStr, typeof nrToStr);

let strToNr = "12";
strToNr = Number(strToNr);
console.log(strToNr, typeof strToNr);

let strToBool = "any string will return true";
strToBool = Boolean(strToBool);
console.log(strToBool, typeof strToBool);

let nullToNr = null;
nullToNr = Number(nullToNr);
console.log("null", nullToNr, typeof nullToNr);

let strToNr1 = "";
strToNr1 = Number(strToNr1);
console.log("empty string", strToNr1, typeof strToNr1);

let strToNr2 = "hello";

strToNr2 = Number(strToNr2);
console.log(strToNr2, typeof strToNr2);


let strToBool2 = "false";
strToBool2 = Boolean(strToBool2);
console.log(strToBool2, typeof strToBool2);

let strToBool3 = "";
strToBool3 = Boolean(strToBool3);
console.log(strToBool3, typeof strToBool3);

console.log(Number(year) + 9);
console.log('I am ' + String(age) + ' years old');

let n = '1' + 1; //string
console.log(n);
console.log(typeof n);
n = n - 1; // Number
console.log(n);


