// 01
let myFrinds = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFrinds.slice(-myFrinds.length, num));

// Method 2
myFrinds.pop();
console.log(myFrinds);

// 02
let friends = ["Ahmed", "Elham", "Osama", "Gamal"];
friends.pop();
friends.shift();
console.log(friends);

// 03
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = finalArr.concat(arrOne, arrTwo).sort().reverse();

console.log(finalArr);

// 04
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase());

// 05
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Solution 1
if (haystack.lastIndexOf(needle) != 0) {
    console.log("Found");
}

// Solution 2
if (haystack.includes(needle)) {
    console.log("Found");
}

// Solution 3
if (haystack.indexOf(needle) != 0) {
    console.log("Found");
}

// 06
let arr1 = ["A","C","X"];
let arr2 = ["D","E","F","Y"];
let allArrs = [];

allArrs.push(arr2[arr2.indexOf("F")],arr1.pop(),arr2.pop());

console.log(allArrs.join("").toLowerCase());