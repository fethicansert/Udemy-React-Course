
//Primitive Types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';



//reference Types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27
};



const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log("Before marriage:", jessica);
console.log("Agter marriage:", marriedJessica);


const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob']
};

// const jessicaCopy = Object.assign({}, jessica2);

// jessicaCopy.firstName = "Davis";
// jessica2.age = 12;

// jessicaCopy.family.push("Fethi");


// console.log(jessica2);
// console.log(jessicaCopy);


const deepCopy = JSON.parse(JSON.stringify(jessica2));


deepCopy.family.push('Fethi');
deepCopy.age = 100;
deepCopy.firstName = 'Ali';
deepCopy.lastName = 'Karadamar';
console.log(jessica2);

console.log(deepCopy);




// const game = {
//     gameName: "Lol",
//     main: 'Zed'
// }

// const player1 = {
//     playerName: 'Fethi',
//     age: 28,
//     game: game
// }
// console.log(player1);

// const player2 = Object.assign({}, player1);
// player2.playerName= 'Ali Karadamar';


// console.log(player1);
// console.log(player2);

// player2.game.main = 'Jungle'

// console.log(player1);
// console.log(player2);



