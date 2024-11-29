// 01
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let ipRe = /\d{4}:\w{3}(:\d{4}){6}/ig;

console.log(ip.match(ipRe));

// 02
let specialNames = "Os100 OsO Os1000 Osa1000 Os1000 Os100m";
let regExp = /Os\w*O/ig;

console.log(specialNames.match(regExp));

// 03
let phone = "+(995)-123 (4567)";
let phoneRe = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/g;

console.log(phone.match(phoneRe));

// 04
let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/ig;
/**
 * https? => The "s" in "https" may or may not be found
 * :\/\/ => :\\
 * (?:[-\w]+\.)? => Range of characters and a dot may or may not be found
 * ([-\w]+)\. =? Range of characters and a dot
 * \w+ => One or more character
 * (?:\.\w+)?\/?.* => Zero or more characters followed by "\" or "." may or may not be found
 */

console.log("https://twitter.com".match(re));

// 05
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let dateRe = /\d\d?(\/|\s)(-\s)?\d\d?(\/|\s)(-\s)?\d+/g;

console.log(date1.match(dateRe));
console.log(date2.match(dateRe));
console.log(date3.match(dateRe));
console.log(date4.match(dateRe));

// 06
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