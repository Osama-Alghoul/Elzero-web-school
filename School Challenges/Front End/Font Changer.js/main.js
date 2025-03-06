let menu = document.getElementById("fontMenu");
let text = document.getElementById("text");
menu.addEventListener("change", function () {
    text.style.fontFamily = menu.value;
})