// 01
let num = 9;
if (num < 10) {
    console.log("00" + num);
} else if (num >= 10 && num < 100) {
    console.log("0" + num);
} else if (num >= 100) {
    console.log(num);
} else {
    console.log("Erro, choose a valid number the bigger than zero!");
}

// 02
let num1 = 9;
let str = "9";
let str2 = "20";

if (num1 == str) {
    console.log(`{num1} is the same value as {str}`);
}

if (num1 == str && typeof(num1) != typeof(str)) {
    console.log(`{num1} is the same value as {str} but not the same value`);
}

if (num1 != str && typeof(num1) != typeof(str2)) {
    console.log(`{num1} is not the same value or the same type as {str}`);
}

if (typeof(str) == typeof(str2) && str != str2) {
    console.log(`{num1} is the same value as {str}`);
}

// 03
let num01 = 10;
let num02 = 30;
let num03 = "30";

if (num03 > num01 && typeof(num03) != typeof(num02)) {
    console.log(`${num03} is lager than ${num01} and type string is not the same as number`);
}

if (num03 > num01 && num03 == num02 && typeof(num03) != typeof(num02)) {
    console.log(`${num03} is lager than ${num01} and value is the same as ${num02} and type string is not the same as number`);
}

if (num03 > num01 && typeof(num03) != typeof(num01) && typeof(num03) != typeof(num02)) {
    console.log(`{num03} value and type is not the same as {num01} and type is not the same as {num02}`);
}

// 04
// Edit What You Want Here
let num001 = 15;
let num002 = 10;
let num003 = 15;
let num004 = 41;

/* 
Don't Edit Below This Line
Needed Output
True 7 Times
*/

// Condition 1

if (num001 > num002) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 2

if (num001 > num002 && num001 < num004) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 3

if (num001 > num002 && num001 === num003) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 4

if ((num001 + num002) < num004) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 5

if ((num001 + num003) < num004) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 6

if ((num001 + num002 + num003) < num004) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 7

if (num004 - (num001 + num003) + num002 === 21) {
    console.log("True");
} else {
    console.log("False");
}