"use strict";
const num = 4;
const num1 = 2;
console.log("---------Addition---------");

const add = num + num1;
console.log(add);
console.log("\n -------------------------\n");

console.log("---------Subtraction ---------");
const Sub = num - num1;
console.log(Sub);
console.log("\n -------------------------\n");

console.log("---------Multiplication ---------");
const Mul = num * num1;
console.log(Mul);
console.log("\n -------------------------\n");
console.log("---------Division ---------");
if (num1 === 0) {
  console.log(" The denominator is 0");
} else {
  const div = num / num1;
  console.log(div);
}

console.log("\n -------------------------\n");
