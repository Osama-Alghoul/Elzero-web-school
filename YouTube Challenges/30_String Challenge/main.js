/*
String Challenge
*/

let a = "Elzero Web School";


// Include This Methods In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero

// 8 H
console.log(a.charAt(a.indexOf("h")).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(a.slice(0, 6).split()); // [Elzero]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substr(0, a.indexOf(" "))}${a.substr(a.lastIndexOf(" "), a.lastIndexOf(" ") + 6)}`); // Elzero School

// Soludtion Must Be Dynamic And String May Change
console.log(a.charAt(0).toLowerCase() + a.substr(1, a.length).toUpperCase()); // eLZERO WEB SCHOOL