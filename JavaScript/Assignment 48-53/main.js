// 01
let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end;) {
    if (i != exclude) {
        console.log(i);
    }
    i += start;
}

//02
let start2 = 10;
let end2 = 0;
let stop2 = 3;

for (let i = start2; i >= stop2; i--) {
    if (i > start2) {
        console.log("0" + i);
    } else {
        console.log(i);
    }
}

// 03
let start3 = 1;
let end3 = 6;
let breaker = 2;

for (let i = start3; i <= end3; i++) {
    console.log(`${i}\n--${end3 - breaker - breaker}\n--${end3 - breaker}`)
}

// 04
let index = 10;
let jumb = 2;

for (; ;) {
    console.log(index);
    index -= jumb;
    if (index == jumb + jumb) {
        break;
    }
}

// 05
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let incr = friends.indexOf("Ahmed");

for (let i = friends.indexOf("Ahmed"); i < friends.length; i++) {
    if (friends[i].startsWith(letter.toUpperCase())) {
        continue;
    }
    console.log(`${incr} => ${friends[i]}`);
    incr++;
}

// 06
let start6 = 0;
let swappedName = "sECTI0N zERO";
let result = [];
swappedName = swappedName.split(""); // Turned swappedName into array

for (let i = start6; i < swappedName.length; i++) {
    if (swappedName[i] == swappedName[i].toUpperCase()) {
        result.push(swappedName[i].toLowerCase());
    } else {
        result.push(swappedName[i].toUpperCase());
    }
}
console.log(result.join(""));
// JOIN SECTI0N ZERO AT "https://discord.gg/vaGaSmntjY"

// 07
let start7 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = ++start7; i < mix.length; i++) {
    if (!isNaN(mix[i])) {
        console.log(mix[i]);
    }
}