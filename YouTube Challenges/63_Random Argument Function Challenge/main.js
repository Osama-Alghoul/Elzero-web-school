/*
Random Function Challenge
Create Function showDetails
Function Accepts 3 Parameters [a, b, c]
Data Types are:
- Name => String
- Age => Number
- Status => Boolean
Use Ternary Conditional Operator
*/

function showDetails(a = undefined, b = undefined, c = undefined) {
    let name, age, status;
    typeof a === "string" ? name = a : typeof b === "string" ? name = b : name = c;
    typeof a === "number" ? age = a : typeof b === "number" ? age = b : age = c;
    typeof a === "boolean" ? status = a : typeof b === "boolean" ? status = b : status = c;
    status === true ? console.log(`Hello ${name}, your age is ${age}, you are available for hire`) : console.log(`Hello ${name}, your age is ${age}, you are not available for hire`);
}

showDetails("Osama", 21, true); // Hello Osama, your age is 21, you are available for hire
showDetails(true, "Osama", 21); // Hello Osama, your age is 21, you are available for hire
showDetails(21, "Osama", true); // Hello Osama, your age is 21, you are available for hire
showDetails("Osama", false, 21); // Hello Osama, your age is 21, you are not available for hire