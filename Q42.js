"use strict";

function makeGreat(magicians) {
  for (let i = 0; i < magicians.length; i++) {
    console.log(`${magicians[i]}`);
  }
}
let magicianName = [
  "The Great David Copperfield",
  "The Great Doug Henning",
  "The Great Siegfried and Roy",
  " The GreatLance Burton",
];
makeGreat(magicianName);

// function makeGreat(magicians) {
//     for (let i = 0; i < magicians.length; i++) {
//       console.log(`Th Great ${magicians[i]}`);
//     }
//   }
//   let magicianName = [
//     "David Copperfield",
//     "Doug Henning",
//     "Siegfried and Roy",
//     "Lance Burton",
//   ];
//   makeGreat(magicianName);