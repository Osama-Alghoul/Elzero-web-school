let selectMenu = document.querySelector("select");
let boldBtn = document.querySelector(".bold");
let incBtn = document.querySelector(".inc");
let decBtn = document.querySelector(".dec");
let numDiv = document.querySelector(".num");
let invert = document.querySelector(".invert");
let textArea = document.querySelector("textarea");

boldBtn.onclick = () => {
    textArea.style.fontWeight =
        textArea.style.fontWeight === 'bold' ? 'normal' : 'bold';
};

incBtn.onclick = () => {
    if (numDiv.innerHTML < 22) {
        numDiv.innerHTML = Number(numDiv.innerHTML) + 1;
        textArea.style.fontSize = `${numDiv.innerHTML}px`
    }
}

decBtn.onclick = () => {
    if (numDiv.innerHTML > 16) {
        numDiv.innerHTML -= 1;
        textArea.style.fontSize = `${numDiv.innerHTML}px`
    }
}

invert.onclick = () => {
    if (textArea.style.backgroundColor === "black") {
        textArea.style.color = "black";
        textArea.style.backgroundColor = "white";
    } else {
        textArea.style.color = "white";
        textArea.style.backgroundColor = "black";
    }
};

selectMenu.addEventListener("change", function () {
    textArea.style.fontFamily = selectMenu.value;
})