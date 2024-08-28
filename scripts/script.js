console.log("Hello Javascript Data Structures");

let movies = ["The Matrix", "Deadpool", "Inception", "Avengers: End Game", "HP 4 Life","LOTR: Two Towers", "Lion King", "Alladin"];

console.log(movies);
console.log(movies[0]);
console.log(movies.length);
console.log(movies[movies.length-1]);


let cohortSlogans = [
    "lightpink salmon",
    "fly you fools",
    "this is a skin of a killer Bella",
    "let's take a short break",
    "you don't know me!!",
    "green everygreen",
    "wutup"
]

console.log(cohortSlogans);
console.log(cohortSlogans[0]);

cohortSlogans.push("break please??");
cohortSlogans.push('Alexa play despacito');
console.log(cohortSlogans);

// cohortSlogans.pop();
// console.log(cohortSlogans);

cohortSlogans.splice(4, 2);
console.log(cohortSlogans);


let kittyCat = {
    name:"Fiji",
    age:9,
    color:"grey",
    isSassyCat: true,
    kittyPals:["Tom", "Peach", "Gnochii"]
}
// console.log(kittyCat);
// console.log(kittyCat.name);
// console.log(kittyCat.color);

console.log(kittyCat["color"]);

// console.log(kittyCat.kittyPals[1]);

// let kittyArray = [kittyCat,{name:"Tom", age:2, color:"black"}];
// console.log(kittyArray)

kittyCat.lives = 9;
kittyCat.name= "MarkRules";
console.log(kittyCat);