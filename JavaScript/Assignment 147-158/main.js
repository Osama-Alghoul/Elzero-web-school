// 01
class Car {
    constructor(name, model, price) {
        this.n = name;
        this.m = model;
        this.p = price;
    }
    run() {
        return `Car Is Running Now`
    }
    stop() {
        return "Car Is Stopping Now"
    }
}

let car1 = new Car("MG", 2022, 420000);
let car2 = new Car("MGM", 2022, 420030);
let car3 = new Car("MGG", 2022, 424000);

console.log(`Car One Name Is ${car1.n} And Model Is ${car1.m} And Price Is ${car1.p}`);
console.log(car1.run())
// Needed Output

"Car One Name Is MG And Model Is 2022 And Price Is 420000"
"Car Is Running Now"

// 02
class Phone {
    constructor(name, serial, price) {
        this.name = name;
        this.serial = serial;
        this.price = price;
    }

}
// Write Tablet Class Here
class Tablet extends Phone {
    constructor(name, serial, price, size = "Unknown") {
        super(name, serial, price);
        this.size = size;
    }
    fullDetails() {
        return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`
    }
}

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);

console.log(`${TabletOne.fullDetails()}`);
// iPad Serial is 100200300 And Size Is 12.9

console.log(`${TabletTwo.fullDetails()}`);
// Nokia Serial is 350450650 And Size Is 10.5

console.log(`${TabletThree.fullDetails()}`);
// LG Serial is 250450650 And Size Is Unknown

// 03
class User {
    #card; // Private property to store the card number

    constructor(username, card) {
        this.u = username;
        this.#card = this.formatCard(card); // Format the card number upon creation
    }

    // Method to format the card number
    formatCard(card) {
        let cardStr = card.toString(); // Ensure it's a string
        return cardStr.replace(/\D/g, "").replace(/(\d{4})(?=\d)/g, "$1-"); // Format into groups of 4 digits
    }

    // Getter for showData
    get showData() {
        return `Hello ${this.u} Your Credit Card Number Is ${this.#card}`;
    }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined


// 04
// Write Your Code Here
String.prototype.addLove = function (val) {
    return `I love ${this} Web School`;
};

// Do Not Edit Below
let myStr = "Elzero";
console.log(myStr.addLove()); // I Love Elzero Web School

// 05
const myObj = {
    username: "Elzero",
    id: 100,
    score: 1000,
    country: "Egypt",
};

// Write Your Code Here

// Make the "score" property read-only
Object.defineProperty(myObj, "score", {
    writable: false, // Prevent modification
    enumerable: true, // Ensure it is visible in the loop
});

// Hide the "id" property in the loop
Object.defineProperty(myObj, "id", {
    enumerable: false, // Prevent it from appearing in the loop
});

// Hide the "country" property entirely
Object.defineProperty(myObj, "country", {
    enumerable: false, // Prevent it from appearing in the loop
    configurable: false, // Ensure it cannot be deleted
});

// Do Not Edit Below

myObj.score = 500;

for (let prop in myObj) {
    console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);
