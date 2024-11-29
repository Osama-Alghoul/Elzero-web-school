// 01
let mix = [1, 2, 3, "S", 4, "e", "c", "t", "i", "o", 5, "n"];
let arr = mix.map(function (ele) {
    return typeof ele === "number" ? "" : ele;
}).reduce(function (acc, current) {
    return acc + current;
})

console.log(arr);

// 02
let myString = "EElllzzzzzzzeroo";
let newString = myString.split("").filter(function (ele, index, arr) {
    return arr.indexOf(ele) === index;
}).reduce(function (acc, current) {
    return acc + current;
});
console.log(newString);

// 03
let myArray = ["E", "l", "z", ["e", "r"], "o"];
let flat = myArray
    .reduce((acc, cur) => acc.concat(cur), [])
    .reduce((acc, cur) => acc + cur);
console.log(flat);

// 04
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let numsOnly = numsAndStrings.filter(function (ele) {
    return typeof ele === "number"
}).map(function (elem) {
    return -elem;
})
console.log(numsOnly);

// 05
let nums = [2, 12, 11, 5, 10, 1, 99];
let numsMND = nums.reduce(function (acc, current) {
    return current % 2 === 0 ? current * acc : current + acc
}, 1)
console.log(numsMND);