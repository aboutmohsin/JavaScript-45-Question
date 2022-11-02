"use strict";
const personName = "Mohsin Hassan";
// Uppercase
let lowercaseName = personName.toLowerCase();
console.log(lowercaseName);

let UppercaseName = personName.toUpperCase();
console.log(UppercaseName);

function titleCase(titleCaseName) {
  titleCaseName = titleCaseName.toLowerCase().split(" ");
  for (var i = 0; i < titleCaseName.length; i++) {
    titleCaseName[i] =
      titleCaseName[i].charAt(0).toUpperCase() + titleCaseName[i].slice(1);
  }
  return titleCaseName.join(" ");
}
titleCase("mohsin hassan");
console.log(titleCase("Mohsin Hassan"));
