"use strict";
//Tests for equality and inequality with strings
const marks = 90;
if (marks === 90) {
  console.log(
    "\n-------Congratulation You are selected for scholarship -----\n"
  );
} else if (marks !== 90) {
  console.log("\n-------Try to next time -----\n");
}
//• Tests using the lower case function
const country = "army";
if (country === "army") {
  console.log("Pka Army  ");
} else if(country==='Army') {
  console.log("Please Enter in lowercase");
}
else if(country==='ARMY') {
    console.log("Please Enter in lowercase");
  }
else if(country==='ARmy') {
    console.log("Please Enter in lowercase");
  }
  else if(country==='ARMy') {
    console.log("Please Enter in lowercase");
  }
  else if(country==='ArmY') {
    console.log("Please Enter in lowercase");
  }

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const BusSeat = [
  "ali",
  "ahmed",
  "daniyal",
  "zia khan",
  "adeel",
  "adil",
  "wajid",
  "saqlain",
  "wajahat",
];
if (BusSeat.length === 10) {
  console.log("Hurry! the bus is full");
} else if (BusSeat.length <= 9) {
  console.log("One Seat left in the bus");
} else if (BusSeat.length <= 8) {
  console.log("Two seats left");
} else if (BusSeat.length <= 7) {
  console.log("Three seats left");
} else if (BusSeat.length <= 6) {
  console.log("Four seats left");
} else if (BusSeat.length <= 5) {
  console.log("Five seats left");
} else if (BusSeat.length <= 4) {
  console.log("Six seats left");
} else if (BusSeat.length <= 3) {
  console.log("Seven seats left");
} else if (BusSeat.length <= 2) {
  console.log("Eigth seats left");
} else if (BusSeat.length <= 1) {
  console.log("Nine seats left");
} else {
  console.log("Bus is Empty");
}


//  Test whether an item is in a array

if(BusSeat.includes('saqlain')){
console.log("Saqlin is present in the buss");

}
else if (BusSeat.includes('Nasir')) {
    console.log("No seat Reserved with this name");
}


