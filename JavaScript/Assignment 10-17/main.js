//Q1
let NumberOne = 10, NumberTwo = 20;
console.log(NumberOne, NumberTwo);
console.log(typeof NumberOne, typeof NumberTwo);
console.log(`${NumberOne} ${NumberTwo}`)
console.log(`${typeof NumberOne}`, `${typeof NumberTwo}`);
console.log(NumberOne + '\n' + NumberTwo);
console.log(`${NumberOne}
${NumberTwo}`);

//Q2 -> HTML div with id="elzero"
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

//Q3
console.log('\` I\'m In \n Love \\\\ """ \'\'\'\n++ With ++\n\\"""\\"""\n""JavaScript""\`\`')

//Q4
let a = 21;
let b = 20;
let c = a.toString() + b.toString(); // result = 2120

//Q5
console.log("// _" + a + "_" + c + "_" + c + "_" + c + "_" + b + "_"); // _21_2021_2021_2021_20_

//challenge
let TheTitle = "Osama",
    DescContent = "Section Zero",
    Date = "25/10";
let card = `
<h3>${TheTitle}</h3>
<p>${DescContent}</p>
<span>${Date}</span>
`;
document.write(card);
document.write(card);
document.write(card);