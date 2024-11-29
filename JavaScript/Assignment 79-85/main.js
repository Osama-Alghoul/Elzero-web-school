// 01
let member = {
    name: "Elzero",
    age: 38,
    country: "Egypt",
    fullDetails: function () {
        return `My name is ${this.name}, my age is ${this.age}, I live in ${this.country}`
    }
}

console.log(member.name);
console.log(member.age);
console.log(member.country);
console.log(member.fullDetails());

// 02
// Method One
let objMethodOne = {
    property: "Method One",
};
console.log(objMethodOne.property); // "Method One"

// Method Two
let objMethodTwo = {};
objMethodTwo.property = "Method Two";
console.log(objMethodTwo.property); // "Method Two"

// Method Three
let objMethodThree = Object.assign({}, { property: "Method Three" });
console.log(objMethodThree.property); // "Method Three"

// Method Four
let objMethodFour = Object.create({
    property: "Method Four",
});
console.log(objMethodFour.property); // "Method Four"

// 03
let a = 1;

let threeNums = {
    b: 2,
    c: 3,
    d: 4,
}

let TwoNums = {
    e: 5,
    f: 6,
}

let finalObject = Object.assign({ a }, threeNums, TwoNums);
console.log(finalObject);

// 04
let myFavGames = {
    "Trinity Universe": {
        publisher: "NIS America",
        price: 40,
    },
    "Titan Quest": {
        publisher: "THQ",
        bestThree: {
            one: "Immortal Throne",
            two: "Ragnarök",
            three: "Atlantis",
        },
        price: 50,
    },
    YS: {
        publisher: "Falcom",
        bestThree: {
            one: "Oath in Felghana",
            two: "Ark Of Napishtim",
            three: "origin",
        },
        price: 40,
    },
};
// Code One => How To Get Object Length ?
let objectLength = Object.getOwnPropertyNames(myFavGames).length;
for (let i = 0; i < objectLength; i++) {
    console.log(`The Game Name Is 
    ${Object.getOwnPropertyNames(myFavGames)[i]}`);
    console.log(
        `The Publisher Is ${myFavGames[Object.getOwnPropertyNames(myFavGames)[i]].publisher
        }`
    );
    console.log(
        `The Price Is ${myFavGames[Object.getOwnPropertyNames(myFavGames)[i]].price
        }`
    );
    // Check If Nested Object Has Property (bestThree)
    if (
        myFavGames[Object.getOwnPropertyNames(myFavGames)[i]].bestThree !== undefined
    ) {
        console.log("- Game Has Releases");
        console.log(
            `First => ${myFavGames[Object.getOwnPropertyNames(myFavGames)[i]].bestThree.one
            }`
        );
        console.log(
            `Second => ${myFavGames[Object.getOwnPropertyNames(myFavGames)[i]].bestThree.two
            }`
        );
        console.log(
            `Third => ${myFavGames[Object.getOwnPropertyNames(myFavGames)[i]].bestThree.three
            }`
        );
    }
    console.log("#".repeat(20));
}
