// WHILE LOOP
// let i = 0;

// while (i < 10) {
//     console.log(i); i++;
// }

// let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];

// let notFound = true;
// while (notFound && someArray.length > 0)
// {
//     if (someArray[0] === "Louiza") {
//         console.log("found her");

//         notFound = false;
//     } else {
//         someArray.shift();
//         console.log(someArray)
//     }

// }

// DO WHILE LOOP
// let number;
// do {
//     number = prompt("Please enter a number between 0 and 100: ");
// } while (!(number >= 0 && number < 100));

// FOR LOOP
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// let arr = [];
// for (let i = 0; i < 100; i++){
//     arr.push(i);
//     console.log(arr);
// }

// let arr = [];
// for (let i = 0; i < 100; i = i + 2){
//     arr.push(i);
//     console.log(arr);
// }

// NESTED LOOPS
// let arrOfArrays = [];
// for (let i = 0; i < 3; i++){
//     arrOfArrays.push([]);
//     for (let j = 0; j < 7; j++) {
//         arrOfArrays[i].push(j);
//        // console.log(arrOfArrays)
//     }
// }

// console.table(arrOfArrays);
// console.info(arrOfArrays);

let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];

// combining arrays with loops
// for (let i = 0; i < names.length; i++){
//     if (names[i].startsWith("M")) {
//         delete names[i];
//         continue;
//     }
//     names[i] = "Hello " + names[i];
//     console.log(names[i]);
// }

// for (let i = 0; i < names.length; i++){
//     names.push("howdy");
//     console.log(names);
// }

// FOR OF LOOP
// for (let peter of names) {
//     console.log(peter);
// }

// FOR IN LOOP
let car = {
  model: "Golf",
  make: "Volkswagen",
  year: 1999,
  color: "black",
};

let cars = [
  {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
  },
  {
    model: "Picanto",
    make: "Kia",
    year: 2020,
    color: "red",
  },
  {
    model: "Peugeot",
    make: "208",
    year: 2021,
    color: "black",
  },
  {
    model: "Fiat",
    make: "Punto",
    year: 2020,
    color: "black",
  },
];

// for (let prop in car) {
//     console.log(car[prop]);
// }

// for (let prop in car) {
//     console.log(prop);
// }

// this will convert an object to an array of its keys
// let arrKeys = Object.keys(car);
// console.log(arrKeys);

// for (let key of Object.keys(car)) {
//     console.log(key);
// }

// for (let key of Object.values(car)) {
//     console.log(key);
// }

// let arrKeys = Object.keys(car);
// for (let i = 0; i < arrKeys.length; i++) {
//     console.log(arrKeys[i] + ": " + car[arrKeys[i]]);

// }

// let arrEntries = Object.entries(car); console.log(arrEntries);

// for (const [key, value] of Object.entries(car)) {
//     console.log(key, ":", value);
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     if (i === 4) {
//         break;
//     }
// }

// for (let i = 0; i < cars.length; i++)
// {
//     if (cars[i].year >= 2020) { 
//             if (cars[i].color === "black"){
//                 console.log("I have found my new car:", cars[i]); break;
//             }
//     }
// }

for (let car of cars){
    if (car.color !== "black") {
        continue;
    }
    if (car.year >= 2020) {
        console.log("we could get this one:", car);
    }
}

    
