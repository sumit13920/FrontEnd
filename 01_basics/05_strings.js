const name = "SitaRam"
const repoCount = 50

// console.log(name + repoCount + " value");

// console.log(`Hellconsoleo my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('SitaRam-sr');//type of string declaration

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));

// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4);
// console.log(newString);

const anotherString = gameName.slice(-8, 5);
// console.log(anotherString);


const newStringOne = "   SitaRam   "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'));

console.log(url.includes('hitesh'));

console.log(gameName.split('-'));