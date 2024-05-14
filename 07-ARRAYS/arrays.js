// const friend1 = "shola";
// const friend2 = "Ade";
// const friend3 = "Bunmi";
// const friend4 = "Opeyemi";
// const friend5 = "Muhammed";
// const friend6 = "Tope";

//literal array
// const friends = ['shola', 'Ade', 'Bunmi', 'Opeyemi', 'Muhammed', 'Tope'];

const friends = new Array('shola', 'Ade', 'Bunmi', 'Opeyemi', 'Muhammed', 'Tope');

const enemies = new Array('lucifer', 419, false, "MMM", null, true, "419");

// console.log(enemies[6]);

// console.log(enemies);

// console.log(friends);

// accessing array values via index
//console.log(friends[5]);

//console.log(friends.length);

friends[2] = 'Funmilayo';

//console.log(friends);


//ARRAY METHODS
const newFriends = friends.push('Beauty');
//console.log(friends);

let arr3 = new Array(10);
let arr4 = [10];

console.log(arr3);
console.log(arr4);

arr3[5] = "Shola";
arr4[2] = "laju";

console.log(arr3);
console.log(arr4);

let arr = ["hi there", 5, true];

console.log(typeof arr[0]);
console.log(typeof arr[1]);
console.log(typeof arr[2]);

const fruits = ["grapefruit", "orange", "lemon"];
//fruits.push("apple");

//fruits.pop();

//fruits.reverse();
fruits.splice(2, 0, "strawberry", "banana");

console.log(fruits);

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant', 'lion'];

//console.log(animals.slice(3));
console.log(animals.slice(0, 2));

let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
console.log(arr7);
arr7.shift();
console.log(arr7);

delete arr7[0];
console.log(arr7);

let arr8 = [ 2, 6, 7, 8 ];

let findValue = arr8.find(function (e) { return e === 6 });

let findValue2 = arr8.find(e => e === 6);

console.log(findValue);
console.log(findValue2);

let names = ['Zack', 'Bob', 'Fatima', 'James', 'Maria'];

names.sort();
console.log(names);

let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];

let arrOfArrays = [someValues1, someValues2, someValues3];
