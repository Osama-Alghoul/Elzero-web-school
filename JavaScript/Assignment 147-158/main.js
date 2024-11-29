// 01
function Car(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
}

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
// Edit The Class
class User {
    constructor(username, card) {
        this.u = username;
        this.c = card;
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

myObj.score = 500;

for (let prop in myObj) {
    console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output

"username => Elzero"
"score => 1000"
{ username: 'Elzero', score: 1000, id: 100 }