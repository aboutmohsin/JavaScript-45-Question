// const age = prompt("Enter your age");

const age = [2, 4, 12, 19, 27, 42, 78];
// age.splice(0, age.length);

if (age <= 2) {
  console.log(`Age ${age} The person is a baby`);
} else if (age >= 2 && age <= 4) {
  console.log(`Age ${age} the person is a toddler.`);
} else if (age >= 4 && age <= 13) {
  console.log(`Age ${age} the person is a kid.`);
} else if (age >= 13 && age <= 20) {
  console.log(`Age ${age} the person is a teenager.`);
} else if (age >= 20 && age <= 65) {
  console.log(`Age ${age} the person is an adult.`);
} else if (age >= 65) {
  console.log(`Age ${age} the person is an elder.`);
} else {
  console.log("We need to find some users!");
}
