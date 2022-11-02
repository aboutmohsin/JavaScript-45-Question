"use strict";

function show_magicians(magicians) {
  for (let i = 0; i < magicians.length; i++) {
    console.log(magicians[i]);
  }
}

function makeGreat(magicians) {
  let greatMagicians = [];
  greatMagicians = magicians;
  for (let i = 0; i < greatMagicians.length; i++) {
    console.log(`The Great ${greatMagicians[i]} `);
  }
}

let magicianName = [
  "David Copperfield",
  "Doug Henning",
  "Siegfried and Roy",
  "Lance Burton",
];
console.log("\nOriginal Magicians:\n");
show_magicians(magicianName);

console.log("\nGreat Magicians:\n");
makeGreat(magicianName);
