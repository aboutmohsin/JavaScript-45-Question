"use strict";
const friendsName = ["Saqalin", "Wajid", "Murtaza", "Maisam"];
console.log(" \nI found bigger dinner table\n");
friendsName.unshift("Haider");
friendsName.splice(5, 0, "Waqar");
console.log(`${friendsName[0]}, Please come to dinner`);
console.log(`${friendsName[1]}, Please come to dinner`);
console.log(`${friendsName[2]}, Please come to dinner`);
console.log(`${friendsName[3]}, Please come to dinner`);
console.log(`${friendsName[4]}, Please come to dinner`);
console.log(`${friendsName[5]}, Please come to dinner`);

console.log(" \n New dinner table won’t arrive in time for the dinner \n");

console.log(` Sorry ${friendsName[5]} the dinner table is not arrive`);
friendsName.pop();
console.log(` Sorry ${friendsName[4]} the dinner table is not arrive`);
friendsName.pop();
console.log(` Sorry ${friendsName[3]} the dinner table is not arrive`);
friendsName.pop();
console.log(` Sorry ${friendsName[2]} the dinner table is not arrive`);
friendsName.pop();

console.log("\nFriends For invite to dinner\n");
console.log(`${friendsName[0]}, Please come to dinner`);
console.log(`${friendsName[1]}, Please come to dinner`);