import { books } from "./booksData.js";
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;



console.log(x, y, z);

const setState = () => {
    return [10, 11];
}


const [state, statez] = setState();

console.log(state);
console.log(statez)

const resturant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ['Italian', 'Pizzeria', 'Vegeterian', 'Organic'],
    starterMenu: ['Foccacia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizaa', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open:12,
            close:22
        },
        fri: {
            open: 11,
            close:23
        },
        sat: {
            open: 0,
            close: 24
        }
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
}

// let [main, , , secondary] = resturant.categories;
// console.log(main, secondary);

//Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;


//Switching variables
// [main, secondary] = [secondary, main];
// console.log(main, secondary);


//Destructaring Arrays

const [starter, main] = resturant.order(2, 0);
console.log(starter, main);


//Nested Destructaring
const nested = [2, 4, [5, 6]];
const [x1, , [z1, z2]] = nested;
console.log(x1, z1, z2);
const [i, , [j1, j2]] = nested;



//Default values in array Destructaring

const [p = 1, q = 2, r = 3] = [8, 9];
console.log(p, q, r);



console.log(books);


const [firstBook, secondBook] = books;
console.log(firstBook, secondBook);
const [, , thirdBook] = books
console.log(thirdBook);

const ratings = [['rating', 4.19], ['ratingsCount', 144584]];

const [[,rating], [,ratingCount]] = ratings;

console.log(rating);
console.log(ratingCount);


const ratingStars = [63405, 1808];

const [fiveStarRatings, oneStarRatings, threeStarRatings= 0] = ratingStars; 

console.log(fiveStarRatings,oneStarRatings, threeStarRatings);







