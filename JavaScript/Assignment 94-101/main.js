// 02
let addClass = document.querySelector(".classes-to-add");
let rmvClass = document.querySelector(".classes-to-remove");
let currntEle = document.querySelector(".element.current");
let classList = document.querySelector(".classes-list div");
let arr = [];
let child;

addClass.addEventListener("blur", function () {
    arr = addClass.value.toLowerCase().split(" ");

    // Add each class to the current element and the class list
    arr.forEach((cls) => {
        currntEle.classList.add(cls);

        // Create and append a span for the new class
        child = document.createElement("span");
        child.innerText = `${cls}`;
        classList.appendChild(child);
    });
    if (classList.childNodes.length == 0) {
        noText();
    }

    // Clear the input and array
    addClass.value = "";
    arr = [];
});

rmvClass.addEventListener("blur", function () {
    arr = rmvClass.value.toLowerCase().split(" ");

    arr.forEach((cls) => {
        currntEle.classList.remove(cls);

        // Find the corresponding span and remove it
        let spans = document.querySelectorAll(".classes-list span");
        spans.forEach((span) => {
            if (span.innerText === cls) {
                classList.removeChild(span);
            }
        });
    });
    if (classList.childNodes.length == 0) {
        noText();
    }

    // Clear the input and array
    rmvClass.value = "";
    arr = [];
});

function noText() {
    let noText = document.createElement("p");
    noText.textContent = "No classes to show";
    classList.appendChild(noText);
}

// 03
let myP = document.querySelector("div.our-element + p");
myP.remove();

let divElement = document.querySelector(".our-element");

let divBefore = document.createElement("div");
divBefore.className = "start";
divBefore.setAttribute("title", "start Element");
divBefore.setAttribute("data-value", "start");
divBefore.innerHTML = "Start";
divElement.before(divBefore);

divAfter = document.createElement("div");
divAfter.className = "end";
divAfter.setAttribute("end", "start Element");
divAfter.setAttribute("data-value", "end");
divAfter.innerHTML = "End";
divElement.after(divAfter);

// 04
let divEle = document.querySelector(".Q4");
console.log(divEle.lastChild.textContent.trim());

// 05
document.body.onclick = function (ele) {
    if (ele.target.nodeName != "BODY") {
        console.log(`This Is ${ele.target.nodeName.toLowerCase()}`)
    }
} 
