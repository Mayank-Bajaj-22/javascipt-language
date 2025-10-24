const marvel_heroes = ["thor", "ironman", "spiderman"];
const dc_heores = ["superman", "flash", "batman"];

// marvel_heroes.push(dc_heores)
// push existing array pe hi push karta hai

// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])

const newArr = marvel_heroes.concat(dc_heores)
// concat new aerray return karta hai
// console.log(newArr)

// spread operator [...]
const allHeroes = [...marvel_heroes, ...dc_heores]
// console.log(allHeroes)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Mayank"))
console.log(Array.from("Mayank"))
console.log(Array.from({name: "Mayank"})) // interesting // []

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3))