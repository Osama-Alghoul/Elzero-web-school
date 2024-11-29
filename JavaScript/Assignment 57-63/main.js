// 01
function sayHello(name, gender) {
    if (gender == "Male") {
        console.log(`Hello Mr ${name}`);
    } else if (gender == "Female") {
        console.log(`Hello Miss ${name}`);
    } else {
        console.log(`Hello ${name}`);
    }
}

sayHello("Osama", "Male");
sayHello("Eman", "Female");
sayHello("Sameh");

// 02
function calculate(firstNum, secondNum, operation) {
    if (operation == "subtract") {
        console.log(firstNum - secondNum);
    } else if (operation == "multiply") {
        console.log(firstNum * secondNum);
    } else if (operation == "add" || operation == undefined && secondNum != undefined) {
        console.log(firstNum + secondNum);
    } else {
        console.log("Second Number Not Found");
    }

}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

// 03
function ageInTime(age) {
    if (age >= 10 && age <= 100) {
        console.log(`Your age is:\n${age * 12} Monthes\n${age * 12 * 4} Weeks\n${age * 12 * 30} Days\n${age * 12 * 30 * 24} Hours\n${age * 12 * 30 * 24 * 60} Mins\n${age * 12 * 30 * 24 * 60 * 60} Seconds`);
    } else {
        console.log("Age Out Of Range (10 - 100)");
    }
}

ageInTime(110);
ageInTime(22);

// 04 (YouTube Challenge #63 Video On JS Playlist)
function showDetails(a = undefined, b = undefined, c = undefined) {
    let name, age, status;
    typeof a === "string" ? name = a : typeof b === "string" ? name = b : name = c;
    typeof a === "number" ? age = a : typeof b === "number" ? age = b : age = c;
    typeof a === "boolean" ? status = a : typeof b === "boolean" ? status = b : status = c;
    status === true ?
        console.log(`Hello ${name}, your age is ${age}, you are available for hire`) :
        console.log(`Hello ${name}, your age is ${age}, you are not available for hire`);
}

showDetails("Osama", 21, true); // Hello Osama, your age is 21, you are available for hire
showDetails(true, "Osama", 21); // Hello Osama, your age is 21, you are available for hire
showDetails(21, "Osama", true); // Hello Osama, your age is 21, you are available for hire
showDetails("Osama", false, 21); // Hello Osama, your age is 21, you are not available for hire

// 05
function createSelectBox(startYear, endYear) {
    document.write("<select>");
    for (let i = startYear; i <= endYear; i++) {
        document.write(`<option value = "${i}">${i}</option>`)
    }
    document.write("</select>");
}

createSelectBox(2000, 2021);

// 06
function multiply(...num) {
    let result = 1;
    for (let i = 0; i < num.length; i++) {
        if (typeof num[i] === "string") {
            continue;
        } else {
            result *= Math.floor(num[i]);
        }
    }
    console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000