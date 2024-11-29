// 01
let divM1 = document.querySelector("div");
let divM2 = document.querySelector("#elzero");
let divM3 = document.querySelector(".element");
let divM4 = document.querySelector("[name = js]");
let divM5 = document.querySelectorAll("div");
let divM6 = document.querySelectorAll("#elzero");
let divM7 = document.querySelectorAll(".element");
let divM8 = document.querySelectorAll("[name = js]");
let divM9 = document.getElementById("elzero")
let divM10 = document.getElementsByClassName("element")
let divM11 = document.getElementsByTagName("div")
let divM12 = document.body.firstChild;
let divM13 = document.body.childNodes[1];
let divM14 = document.body.children[0];
let divM15 = document.body.firstElementChild;

// 02
let divImgs = document.querySelectorAll("div img");
for (let i = 0; i < divImgs.length; i++) {
    divImgs[i].setAttribute("alt", "Elzero logo")
    divImgs[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
}

// 03
let inputUSD = document.querySelector("[name = 'dollar']");
let USDToEGY = document.querySelector("form .result");

inputUSD.oninput = function () {
    USDToEGY.textContent = `{${inputUSD.value}} USD Dollar = {${(inputUSD.value * 30.4).toFixed(2)}} Egyption Pound`
}

// 04
let divOne = document.querySelector("div.one");
let divTwo = document.querySelector("div.two");
let txtContentTwo = divOne.textContent; // In order to save the word with uppercase for the first letter

divOne.title = divTwo.title;
divOne.textContent = divTwo.textContent;

divTwo.title = divTwo.classList;
divTwo.textContent = `${txtContentTwo} ${++divTwo.childNodes.length}`

// 05
let oldNewImgs = document.querySelectorAll("img[src = '#']");
let setAtrr = function () {
    for (let i = 0; i < oldNewImgs.length; i++) {
        if (oldNewImgs[i].hasAttribute("alt")) {
            oldNewImgs[i].setAttribute("alt", "Old");
        } else {
            oldNewImgs[i].setAttribute("alt", "Elzero New");
        }
    }
};
setAtrr();

// 06
let numberAct = document.querySelector("[name='elements']");
let textAct = document.querySelector("[name='texts']");
let selectAct = document.querySelector("select");
let submitAct = document.querySelector("[value='Create']");
let resultAct = document.querySelector(".results");

submitAct.onclick = (event) => {
    event.preventDefault();
    resultAct.innerHTML = "";
    for (let i = 1; i <= numberAct.value; i++) {
        let element = document.createElement(selectAct.value.toLowerCase());
        element.className = "box";
        element.setAttribute("title", "Element");
        element.setAttribute("id", `id-${i}`);
        element.textContent = textAct.value;
        element.style.cssText = ("background-color: blue;color: white;border-radius: 4px; padding: 2.5px")
        resultAct.appendChild(element);
    }
};