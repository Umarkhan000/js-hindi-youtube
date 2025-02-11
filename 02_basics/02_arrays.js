const marvel_heros = ["spiderman", "thor", "ironman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_my_heros = [...marvel_heros, ...dc_heros]

// console.log(all_my_heros);

const another_array = [1, 2, 3, [4, 5, 6], 11, [7, 8, [9, 10]]]

const my_another_array = another_array.flat(Infinity)

console.log(my_another_array);



console.log(Array.isArray("Umarkhan"));
console.log(Array.from("Umarkhan"));

console.log(Array.from({name : "Umarkhan"}));  // this gives an empty array as output because in if object fails to convert then it returns with an empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));







