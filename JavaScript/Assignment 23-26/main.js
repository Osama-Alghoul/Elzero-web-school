// Q1
// Replace ? With Arithmetic Operators
console.log(10 + 20 + 15 + 3 + 190 + 10 + 400); // 0

// Q2
let num = 3;

// Solution One
console.log(num + true + true + true); // 6
// Solution Two
console.log(num + true * 3); // 6
// Soultion Three
console.log(num++ + --num); // 6
// Soultion Four
console.log(num + num); // 6
// Solution Five
console.log(num * (true + true)); // 6
// Solution Six
console.log(num + +0x03); // 6

// Q3
let num2 = "10";

console.log(+num2 * (true + true));
console.log(+num2 + +num2);
console.log(+num2 + +0x0a);
console.log(+num2 + true * 10);