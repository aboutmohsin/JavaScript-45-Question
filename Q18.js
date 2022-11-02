"use strict";
const locations = ["Skardu", "khasmir", "Paris", "Maui", "Tahiti", "Rome"];
console.log("\n-----Orginal Array-----\n");
console.log(locations);

console.log("\n-----Alphabetical Order-----\n");
console.log(locations.sort());
console.log("\n-----Reverse Alphabetical Order -----\n");
console.log(locations.reverse());
console.log("\n----- Reverse the order of my list. -----\n");
const reverseList = locations.reverse();
console.log(reverseList);
console.log("\n----- Reverse the order of my list agian. -----\n");
const reverseListAgain = reverseList.reverse();
console.log(reverseListAgain);
console.log("\n----- Sort in alphabetical Order -----\n");
console.log(reverseList.sort());
console.log("\n----- Sort  in reverse alphabetical Order -----\n");
console.log(reverseList.reverse());
