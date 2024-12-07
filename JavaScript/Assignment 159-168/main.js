// 01
let dateNow = new Date();
let birthday = new Date("Sep 10, 02");
let dateDiff = dateNow - birthday;

console.log(`${(dateDiff / 1000).toFixed()} Seconds`);
console.log(`${(dateDiff / 1000 / 60).toFixed()} Minutes`);
console.log(`${(dateDiff / 1000 / 60 / 60).toFixed()} Houres`);
console.log(`${(dateDiff / 1000 / 60 / 60 / 24).toFixed()} Days`);
console.log(`${(dateDiff / 1000 / 60 / 60 / 24 / 30).toFixed()} Monthes`);
console.log(`${(dateDiff / 1000 / 60 / 60 / 24 / 30 / 12).toFixed(2)} Years`);
console.log("");

// 02
let dateFirst = new Date(0);
dateFirst.setHours(0,0,1);
console.log(dateFirst);
console.log("");

// 03
let monthBefore = new Date();
monthBefore.getDate();
console.log(monthBefore);