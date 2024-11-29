/*
  You can use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code
  
  You can't use
  - Numbers
  - Letters

  - You must use [Filter + Map + Reduce + Your knowledge]
  - Order isn't important
  - All in one chain
*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let soultion = myString.split('').filter(function (ele) {
  return isNaN(parseInt(ele));
}).filter(function (ele) {
  return !ele.includes(",");    // Remove the commas
}).map(function (ele) {
  return ele.replace('_', ' '); // Replace dashes with spaces
}).filter(function (ele) {
  return ! ele.startsWith("Z"); // Remove the last Z
}).reduce(function (ele, cur) {
  return ele === cur ? ele : ele + cur; // Remove the repeated E 
});

console.log(soultion); // Elzero Web School