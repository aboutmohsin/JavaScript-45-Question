"use strict";
const friendsName = ["Saqalin", "Wajid", "Murtaza", "Maisam"];
console.log(" I found bigger dinner table");
friendsName.unshift("Haider");
friendsName.splice(5, 0, "Waqar");
console.log(`${friendsName[0]}, Please come to dinner`);
console.log(`${friendsName[1]}, Please come to dinner`);
console.log(`${friendsName[2]}, Please come to dinner`);
console.log(`${friendsName[3]}, Please come to dinner`);
console.log(`${friendsName[4]}, Please come to dinner`);
console.log(`${friendsName[5]}, Please come to dinner`);