/* Challenge 1 */

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++); // 100
/* 
  [++a] [+] [+b++]
  - Value: 30
  - Explain: [++a] -> pre increment, [+] addition, [+b] turn "20" into number 20, [+b++] post increment
  [+] [+c++]
  - Value: 110  
  - Explain: [+] addition, [+] [c++] post incremnet
  [-] [+a++]
  - Value: 100
  - Explain: [-] subtraction, [+] [a++] post increment 
  a = 12
  b = 21
  c = 81
*/
console.log(++a + -b + +c++ - -a++ + +a); // 100
/* 
  [++a] [+] [-b]
  - Value: -8
  - Explain: [++a] pre increment, [+] addition, [-b] turn "20" into number -20
  [+] [+c++]
  - Value: 73
  - Explain: [+] addition, [+] [c++] post increment
  [-] [-a++]
  - Value: 86
  - Explain: [-] subtraction, [-a] turn 13 into -13, [-a++] post increment
  [+] [+a] 
  - Value: 100
  a = 14 
  b = 21 
  c = 82
*/
console.log(--c + +b + --a * +b++ - +b * a + --a - +true); // 100
/*
  [--c] [+] [+b]
  - Value: 102
  - Explain: [--c] pre decrement, [+] addition, [+b] turn "20" into number 20
  [+] [--a] [*] [+b++]
  - Value: 375
  - Explain: [+] addition, [--a] pre decrement, [*] multiplication, [+b++] post increment
  [-] [+b] [*] [a]
  - Value: 89
  - Explain: [-] subtraction, [+b] 22, [*] multplication, [a] 13
  [+] [--a] [-] [+true]
  - Value: 100
  - Explain: [+] addition, [--a] pre decrement, [-] subtraction, [+true] turn boolean value true into number 1
*/

/* Challenge 2 */

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Don't Use Variable Twice

console.log(- +d * +e); // 2000
console.log(- +d + ++g * ++e + ++f); // 173