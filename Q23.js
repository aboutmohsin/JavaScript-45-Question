"use strict";
"use strict";
const students =
  ({
    name: "Ahmed",
    Class: "BSCS",
    RegistrationNumber: "123",
    marks: 80,
  },
  {
    name: "Haider",
    Class: "BSCS",
    RegistrationNumber: "12345",
    marks: 90,
  },
  {
    name: "Abid",
    Class: "BSCS",
    RegistrationNumber: "12346",
    marks: 70,
  },
  {
    name: "Ejaz",
    Class: "BSCS",
    RegistrationNumber: "12347",
    marks: 60,
  },
  {
    name: "Hussain",
    Class: "BSCS",
    RegistrationNumber: "1234",
    marks: 50,
  },
  {
    name: "Ahsan",
    Class: "BSCS",
    RegistrationNumber: "1234",
    marks: 40,
  });
if (students.marks === 90) {
  console.log("\n-------Congratulation Your Grade is A+ -----\n");
  console.log(students.name);
  console.log(students.Class);
  console.log(students.RegistrationNumber);
  console.log(students.marks);
} else if (students.marks >= 80) {
  console.log("\n-------Congratulation Your Grade is A -----\n");
  console.log(students.name);
  console.log(students.Class);
  console.log(students.RegistrationNumber);
  console.log(students.marks);
} else if (students.marks >= 70) {
  console.log("\n-------Congratulation Your Grade is B+ -----\n");
  console.log(students.name);
  console.log(students.Class);
  console.log(students.RegistrationNumber);
  console.log(students.marks);
} else if (students.marks >= 60) {
  console.log("\n-------Congratulation Your Grade is B -----\n");
  console.log(students.name);
  console.log(students.Class);
  console.log(students.RegistrationNumber);
  console.log(students.marks);
} else if (students.marks >= 60) {
  console.log("\n-------Congratulation Your Grade is C -----\n");
  console.log(students.name);
  console.log(students.Class);
  console.log(students.RegistrationNumber);
  console.log(students.marks);
} else {
  console.log("\n-------You are Fail -----\n");
  console.log(students.name);
  console.log(students.Class);
  console.log(students.RegistrationNumber);
  console.log(students.marks);
}


let car = 'subaru';
if(car==='subaru'){
  return true;
}
else{
  return false
}

