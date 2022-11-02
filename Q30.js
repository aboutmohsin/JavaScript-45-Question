"use strict";
let usernames = [];
for (let i = 0; i < 3; i++) {
  usernames[i] = prompt("Enter Your Username");
}
// let usernames = ["admin", "Eric"];
for (let i = 0; i < usernames.length; i++) {
  if (usernames[i] === "admin") {
    console.log(
      `Hello ${usernames[i]}, would you like to see a status report?\n`
    );
  } else {
    console.log(`\n Hello ${usernames[i]}, thank you for logging in again.`);
  }
}
