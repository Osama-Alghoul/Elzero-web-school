// 01
let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size)

console.log(setOfNumbers);
console.log(Array.from(setOfNumbers).pop());

//02
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
console.log(Array.from(new Set(myFriends.sort())));

//03
let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
}

console.log(Object.entries(myInfo));

let myMap = new Map(Object.entries(myInfo));

console.log(myMap);
console.log(myMap.size);
console.log(myMap.has("role"));

//04
let theNumber = 100020003000;
console.log(+[...new Set(theNumber.toString())].sort().join(""));

//05
let theName = "Elzero";

console.log(Array.from(theName));
console.log([...theName]);
console.log(theName.split(""));
console.log(Object.assign([], theName));
let result = [];
for (let char of theName) {
    result.push(char);
}
console.log(result);

//06
let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

let characters = chars.filter((e) => typeof e !== 'number');
let numbers = chars.filter((e) => typeof e === 'number');
let numsCount = numbers.length;
let replacment = characters.slice(0, numsCount);

console.log([...replacment, ...characters])

//07
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log([...numsOne, ...numsTwo]);
console.log(numsOne.concat(numsTwo));
let compained = function () {
    for (let i = 0; i < numsTwo.length; i++) {
        numsOne.push(numsTwo[i]);
    }
    return numsOne;
}
console.log(compained());

//08
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(n1.concat(n2).length * n2.length * n2.pop());
// 7 * 3 * 10 = 210