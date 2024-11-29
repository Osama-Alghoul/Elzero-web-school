var element = document.createElement("h1");
element.textContent = "Osama";

element.style.color = "blue";
element.style.fontSize = "80px";
element.style.fontWeight = "bold";
element.style.textAlign = "center";
element.style.fontFamily = "Arial";

document.body.appendChild(element);
//
console.log("%cElzero %cWeb %cSchool", "color: red; font-size: 40px;","color: green; font-size: 40px; font-weight:bold;","color: white; font-size: 40px; background-color:blue;");
//
console.group("Group 1");
console.log("Message One");
console.log("Message Two");
console.group("Child Group");
console.log("Message One");
console.log("Message Two");
console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.group("Group 2");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
//
console.table(["osama","osama","osama","osama","osama"]);
//
console.log("Iam In Console");
document.write("Iam In Page");