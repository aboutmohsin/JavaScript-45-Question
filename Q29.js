"use strict";
let favorite_fruits = [];
for (let i = 0; i < 3; i++) {
  favorite_fruits[i] = prompt("Enter Your Favorite Fruit");
}
// const favorite_fruits = ["Mango", "Banana", "Apple"];
for (let i = 0; i < favorite_fruits.length; i++) {
  if (favorite_fruits[i] === "Mango") {
    console.log(`really like ${favorite_fruits[i]}`);
  } else if (favorite_fruits[i] === "Banana") {
    console.log(`really like ${favorite_fruits[i]}`);
  } else if (favorite_fruits[i] === "Apple") {
    console.log(`really like ${favorite_fruits[i]}`);
  } else {
    console.log(`This ${favorite_fruits[i]} fruit is not my favorite`);
  }
}
