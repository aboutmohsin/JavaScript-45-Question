"use strict";
function car(manufacturer, modelName, option = {}) {
  let carDetails = {
    carManufacturerName: manufacturer,
    carModelName: modelName,
    otherdetails: option,
  };
  return carDetails;
}
const color = "black";
const manufactureryear = "2019";
let carInfo = car(
  "Indus Motor Company Limited",
  "revo",
  color,
  manufactureryear
);
console.log(carInfo);
