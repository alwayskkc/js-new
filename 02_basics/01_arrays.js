marvel = ["ironman", "cap", "thor"]
dc = ["batman", "superman", "flash"]

//console.log("A ->", marvel + dc);
//y = marvel.concat(dc)
//console.log("Y ->", y);
//console.log("B ->", marvel.concat(dc));
//marvel.push(dc)
//console.log("D ->", marvel);

//const all = [...marvel, ...dc]

//console.log(all);

//const arr = [1,2,3,[2,34,5],4,5,[6,7,[8,9]]]
//const real_arr = arr.flat(Infinity)
//console.log(real_arr);

console.log(Array.isArray(dc));

const arr = Array.from("Chaitanya")
console.log(Array.isArray(arr));
//console.log(Array.bind(arr));
const arr1 = arr.toString(',')
console.log(arr1);

console.log(Array.from({name: "hitesh"})) //interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

