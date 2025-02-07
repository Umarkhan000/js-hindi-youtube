const name = "umar"
const repoCount = 60

// console.log(name + repoCount);  // don't use this instead use modern way by using backtick(`) and ${}

// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('umar-ahamed')
// console.log(gameName[6]);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(9));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-9,6)
console.log(anotherString);

const newStringOne = "            umarkhan      "
console.log(newStringOne);
console.log(newStringOne.trim());   //trim string

const newName = "umarahamedkhan"
console.log(newName.replace('ahamed', '-'));   //replace string 

const url = "https://umar.com/umar%30khan"
console.log(url.replace('%30', '-'));   //replace string

console.log(url.includes('khan'));   //this includes - it helps to find anyword that it is present in it or not


const newStringTwo = "umar-ahamed-khan"
console.log(newStringTwo.split('-'));




