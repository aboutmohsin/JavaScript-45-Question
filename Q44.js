"use strict";
// const item = ["roast beef", "cheddar cheese", "lettuce", "honey dijon"];
function makeSandwich() {
  let item = [...arguments];
  for (let i = 0; i < item.length; i++) {
    console.log("\nMake a sandwich\n");
    console.log(`${item[i]} is your sandwich\n`);
    console.log("Your Sandwich is ready!");
  }
}
makeSandwich("Chicken Sandwich", "Egg Sandwich", "Seafood Sandwich");
makeSandwich("Roast Beef Sandwich", "Grilled Cheese", "Ham Sandwich");
makeSandwich(
  "Nutella Sandwich",
  "Grilled Chicken Sandwich",
  "Meatball Sandwich"
);
