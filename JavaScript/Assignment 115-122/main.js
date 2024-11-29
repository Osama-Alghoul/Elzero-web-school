// 01
let myNumbers = [1, 2, 3, 4, 5];
let [a1, , , , e] = myNumbers;

console.log(a1 * e); // 5


// 02
let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

[a2, b, c, [d, e, [f, g]]] = mySkills;

console.log(`My Skills: ${a2}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);


// 03
let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohammed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

arr1.push(arr3);

[c, , , [, a3, b]] = arr1;

console.log(`My best friends: ${a3}, ${b}, ${c}`);


// 04
const member = {
    age: 30,
    working: false,
    country: "Egypt",
    hobbies: ["Reading", "Swimming", "Programming"],
}

const { age: a4, working: w4, country: c4, hobbies: [h1, , h3] } = member;

console.log(`My Age Is ${a4} And Iam ${w4 ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

console.log(`I live in ${c4}`);
// I live in Egypt

console.log(`My Hoppies: ${h1} And ${h3}`);
// My Hoppies: Reading And Programming


// 05

const game = {
    title: 'YS',
    developer: 'Falcom',
    releases: {
        'Oath In Felghana': ['USA', 'Japan'],
        'Ark Of Napishtim': {
            US: '20 USD',
            JAP: '10 USD',
        },
        Origin: '30 USD',
    },
};

// Write Your Destructuring Assignment/s Here
({
    title: t,
    developer: d,
    releases: {
        'Oath In Felghana': [u, j],
        'Ark Of Napishtim': { US: u_price, JAP: j_price },
        Origin: or,
    },
} = game);

let o = Object.getOwnPropertyNames(game.releases)[0];
let a = Object.getOwnPropertyNames(game.releases)[1];


console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${a}`);
// Although I Love Ark Of Napishtim

console.log(`${a} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${a} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD


// 06 (YouTube Challenge #122)
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
