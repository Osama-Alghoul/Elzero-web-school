/*
  Number Challenge 
*/

let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number in All Variables And Return Integer
console.log(parseInt(Math.min(a, b, c, d)));

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a, parseInt(d))); // 10000

// Get Integer "2" From d Variable With 4 Methodes
console.log(Math.trunc(d));
console.log(parseInt(d));
console.log(Math.floor(d));
console.log(Math.round(d));

// Use Variables b + d To Get This Values
console.log(((b / d).toString().substr(6,5) / 1000).toFixed(2)); // 66.67 => String
console.log(Math.round(((b / d).toString().substr(6,4) / 100).toFixed(2))); // 67 => Number
