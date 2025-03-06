let chosen = 1;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
]

if (chosen == 1) {
    let [{ title, age, available, skills: [, two] }] = myFriends;
    console.log(`${title}`);
    console.log(`${age}`);
    console.log(`${available == true ? "Availbe" : "Not Availbe"}`);
    console.log(`${two}`);

} else if (chosen == 2) {
    let [, { title, age, available, skills: [, two] },] = myFriends;
    console.log(`${title}`);
    console.log(`${age}`);
    console.log(`${available == true ? "Availbe" : "Not Availbe"}`);
    console.log(`${two}`);

} else if (chosen == 3) {
    let [, , { title, age, available, skills: [, two] }] = myFriends;
    console.log(`${title}`);
    console.log(`${age}`);
    console.log(`${available == true ? "Availbe" : "Not Availbe"}`);
    console.log(`${two}`);

} else {
    console.log("Chosen value is not availble")
}
