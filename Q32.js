"use strict";
const current_users = ["admin", "saqlain", "saad", "rabnawaz", "solomon"];
const new_users = ["ejaz", "saqlain", "abbas", "", "haider"];

let newUsers=new_users

for (let i = 0; i < 5; i++) {
  if (current_users[i] === new_users[i]) {
    console.log(`Enter a new  username.`);
  } else {
    console.log("the username is available.");
  }
}


