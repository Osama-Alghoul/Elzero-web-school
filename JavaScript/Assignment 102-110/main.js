// 01
// let userInput = window.prompt("Enter two numbers", "20-5");
// let arr = userInput.split("-").map(Number).sort();

// for (let i = arr[1]; i <= arr[0]; i++) {
//     console.log(i);
// }

// 02
let mainDiv = document.querySelector(".mainDiv");
let x = document.querySelector("button.x");
setTimeout(() => {
    mainDiv.style.display = "block";
}, 5000);
x.onclick = () => {
    mainDiv.style.display = "none";
}

// 03
// 04
// 05
let count = 10;
let counter = document.querySelector('.counter');

let countdown = setInterval(() => {
    counter.textContent = count;
    count--;

    if (count < 0) {
        clearInterval(countdown);
        window.open("https://elzero.org/","_blank","height=400,width=400");
    }
}, 1000);