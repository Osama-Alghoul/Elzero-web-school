let userName = "Elzero";
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.charAt(userName.search("E")).toLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName.charAt(userName.indexOf("E")).toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase().repeat(3)); // eee

let word = "Elzero";
let letterE = "e";
let letterZ = "z";
let letterO = "O";

console.log(word.startsWith(letterE.toUpperCase())); //true
console.log(word.includes(letterZ)); //true
console.log(word.endsWith(letterO.toLowerCase())); //true