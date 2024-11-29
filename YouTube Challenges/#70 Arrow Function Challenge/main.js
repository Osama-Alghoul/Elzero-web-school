/*
  Function Arrow Challenge
*/

// [1] One Statment Funtion
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

// let names = function (...name) {let output = '';for (let i = 0; i < name.length; i++) {output = output + `[${name[i]}], `} return `String ${output}=> Done !`;}

let names = (...name) => { let output = ''; for (let i = 0; i < name.length; i++) { output = output + `[${name[i]}], ` } `String ${output}=> Done !`; }
console.log(names("Osama", "Mohammed", "Ali", "Ibrahim"));
// String [Osama], [Mohammed], [Ali], [Ibrahim] => Done !

/* ================================== */

// [1] Repalce ??? In Return Statment To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Argument To Get The Output

let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) => { let count = one + two; for (let i = 0; i < nums.length; i++) { count = count + nums[i] } return count; }

console.log(calc(10, myNumbers[2], myNumbers[3])); //80