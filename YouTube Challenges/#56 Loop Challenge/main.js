let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amjad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Sozan", "Obaida", "Oscar", "Samar"];
// add some items to the array for a testing purposes

let actualAdmins = [];
for (let i = 0; i < myAdmins.length; i++) {
    if (myAdmins[i] === "Stop") {
        break;
    }
    actualAdmins[i] = myAdmins[i];
}
document.write(`<div>We Have ${actualAdmins.length} Admins</div> <hr>`);

for (let j = 0; j < actualAdmins.length; j++) {
    document.write(`<div>`); // Teams' div opened
    document.write(`<div>The Admin For Team ${j + 1} Is ${actualAdmins[j]}
    <h3>Team Members:</h3>
    </div>`);
    for (let v = 0; v < myEmployees.length; v++) {
        if (myEmployees[v].charAt(0) === actualAdmins[j].charAt(0)) {
            document.write(`<li style = "list-style: decimal; margin: 5px 0">${myEmployees[v]}</li>`);
        }
    }
    document.write(`</div>`); // Teams' div closed
    document.write(`<hr>`);
}