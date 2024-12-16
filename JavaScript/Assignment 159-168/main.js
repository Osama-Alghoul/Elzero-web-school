// 01
let dateNow = new Date();
let birthday = new Date("Sep 10, 02");
let dateDiff = dateNow - birthday;

console.log(`${(dateDiff / 1000).toFixed()} Seconds`);
console.log(`${(dateDiff / 1000 / 60).toFixed()} Minutes`);
console.log(`${(dateDiff / 1000 / 60 / 60).toFixed()} Houres`);
console.log(`${(dateDiff / 1000 / 60 / 60 / 24).toFixed()} Days`);
console.log(`${(dateDiff / 1000 / 60 / 60 / 24 / 30).toFixed()} Monthes`);
console.log(`${(dateDiff / 1000 / 60 / 60 / 24 / 30 / 12).toFixed(2)} Years`);
console.log("");

// 02
let dateFirst = new Date(0);
dateFirst.setHours(0, 0, 1);
console.log(dateFirst);
console.log("");

// 03

let currentDate = new Date();
let lastDayOfPreviousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
let formattedDate = lastDayOfPreviousMonth.toString();

let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let previousMonthName = monthNames[lastDayOfPreviousMonth.getMonth()];

let lastDay = lastDayOfPreviousMonth.getDate();

// Print the results
console.log(`"${formattedDate}"`);
console.log(`"Previous Month Is ${previousMonthName} And Last Day Is ${lastDay}"`);

// 04
// Method 1
let birthDateString = "Tue Sep 10 2002 00:00:00 GMT+0300 (Palestine Daylight Time)";
console.log(birthDateString);

// Method 2
let birthDateComponents = new Date(2002, 8, 10, 0, 0, 0);
console.log(birthDateComponents.toString());

// Method 3
let birthDateFromString = new Date("2002-09-10T00:00:00+02:00");
console.log(birthDateFromString.toString());

// 05
let start = performance.now();

// Some code you want to measure
for (let i = 0; i < 999; i++) {
    console.log(i);
}

let end = performance.now();
console.log(`Loop took ${end - start} milliseconds.`);

// 06
function* gen() {
    let index = 14;
    let increment = 140;
    while (true) {
        yield index; // Pattern is unknown till now
        index += increment;
        increment += 200;
    }
}

let generator = gen();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

// 07
function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
}

function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
}

function* genAll() {
    const seen = new Set();
    for (let value of genNumbers()) {
        if (!seen.has(value)) {
            seen.add(value);
            yield value;
        }
    }
    for (let value of genLetters()) {
        if (!seen.has(value)) {
            seen.add(value);
            yield value;
        }
    }
}

let generator07 = genAll();

console.log(generator07.next()); // {value: 2, done: false}
console.log(generator07.next()); // {value: 1, done: false}
console.log(generator07.next()); // {value: 3, done: false}
console.log(generator07.next()); // {value: 4, done: false}
console.log(generator07.next()); // {value: 5, done: false}
console.log(generator07.next()); // {value: "A", done: false}
console.log(generator07.next()); // {value: "B", done: false}
console.log(generator07.next()); // {value: "C", done: false}
console.log(generator07.next()); // {value: "D", done: false}


// 08
// main.js
import calc from './mod-one.js';
import { modOne } from './mod-two.js';

console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60
