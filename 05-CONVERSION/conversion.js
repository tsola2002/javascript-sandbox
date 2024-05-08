// Type Conversion

const year = '1991';
const age = 23;

console.log(typeof year);
const convertedYear = Number(year);
console.log(typeof convertedYear);

const fraud = 419;
console.log(typeof fraud);

const convertedFraud = String(fraud);
console.log(typeof convertedFraud);

console.log(Number(year) + 9);
console.log('I am ' + String(age) + ' years old');

let n = '1' + 1; //string
console.log(n);
console.log(typeof n);
n = n - 1; // Number
console.log(n);


