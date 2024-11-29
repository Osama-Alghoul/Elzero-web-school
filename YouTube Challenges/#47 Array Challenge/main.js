/*
  Array Challenge
*/

let zero = 0;
let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my.reverse().slice(-(counter + ++zero))); // ["Osama" , "Elham", "Mazero", "Ahmed"]

console.log(my.slice(-counter, -zero)); // ["Elham", "Mazero"]

console.log(my[counter].slice(--zero, --counter).concat(my[++counter + ++zero].slice(++zero))); // "Elzero"

console.log(my[counter + --zero].slice(- --counter, - zero) + my[counter].charAt(my[counter].indexOf("O"))); // "rO"