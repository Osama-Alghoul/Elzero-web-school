/* IMPORTANT NOTE
I've made this challenge knowing that I won't be focusing on css inside the JS file
But I do created the Elements successfully as the challenge asks
I'd accept any edit to style this page
*/

let myBody = document.querySelector("body");

// Creating header
let myHeader = document.createElement("header");
let myDiv = document.createElement("div").cloneNode(true);
let myLogo = document.createTextNode("Secti0n");
let myMenu = document.createElement("ul");
let myStLi = document.createElement("li");
let myScLi = document.createElement("li");
let myThLi = document.createElement("li");
let myFoLi = document.createElement("li");
let myHome = document.createTextNode("Home");
let myAbout = document.createTextNode("About");
let myCont = document.createTextNode("Contact");
let myServ = document.createTextNode("Services");

myBody.style.cssText = "font-family:Arial; margin: 0;";

// Createing list items
myStLi.appendChild(myHome);
myScLi.appendChild(myAbout);
myThLi.appendChild(myCont);
myFoLi.appendChild(myServ);

// Createing list
myMenu.appendChild(myStLi);
myMenu.appendChild(myScLi);
myMenu.appendChild(myThLi);
myMenu.appendChild(myFoLi);
myMenu.style.cssText = ("display: flex; list-style: none;");
myMenu.style.margin = 0;

// Createing logo
myDiv.appendChild(myLogo);
myDiv.style.cssText = "font-weight: bold; color: blue;";

myHeader.appendChild(myDiv);
myHeader.appendChild(myMenu);
myHeader.style.cssText = "display:flex; justify-content: space-between; padding: 5px;";

// Add Header To The Body
myBody.appendChild(myHeader);

// Styling li
let styleLi = document.querySelectorAll("li");
for (let i = 0; i < styleLi.length; i++) {
    styleLi[i].style.marginRight = "5px";
}

// Creating the article
let myContain = document.createElement("article");

// Creating Products
for (let i = 0; i <= 15; i++) {
    let numbersP = document.createElement("p");
    let numbersT = document.createTextNode(i);
    numbersP.appendChild(numbersT);

    let productP = document.createElement("p");
    let productT = document.createTextNode("Product");
    productP.appendChild(productT);

    let artDiv = document.createElement("div");
    artDiv.appendChild(numbersP);
    artDiv.appendChild(productP);

    artDiv.style.cssText = "background-color:white; width: calc(25% - 10px); text-align: center;";

    myContain.appendChild(artDiv);
}

myContain.style.cssText = "background-color: gray; display:flex; flex-wrap: wrap; gap: 10px; padding:10px; justify-content: space-between;";

myBody.appendChild(myContain);

// Creating Footer
let myFooter = document.createElement("footer");
let copyright = document.createTextNode("CopyRight 2024");

myFooter.appendChild(copyright);
myFooter.style.cssText = "background-color:blue; color:white; text-align: center; padding: 5px;";
myBody.appendChild(myFooter);