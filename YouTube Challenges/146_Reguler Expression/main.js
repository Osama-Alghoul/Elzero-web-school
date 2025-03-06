let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let urlRe = /(https?:\/\/)?(www.)?\w+.\w+(:\d{4})?(?:\.\w+)?\/?.*/g;

console.log(url1.match(urlRe));
console.log(url2.match(urlRe));
console.log(url3.match(urlRe));
console.log(url4.match(urlRe));
console.log(url5.match(urlRe));