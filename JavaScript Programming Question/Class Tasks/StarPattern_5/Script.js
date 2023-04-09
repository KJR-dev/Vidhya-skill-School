// Print this star pattern

// ********* 
//  *******
//   *****
//    ***
//     *


// Input must be a positive odd number.
// Input number is less than equal to zero then output should be "please enter a positive odd number"
// Input is String and Not a Number(NaN) then output should be "please enter a valid odd number"
// When condition is true then * will be print othewise space will be print

// Step 1: Create a printStarPattern function.
// Step 2: Initialize a let variable and store empty string.
// Step 3: crete outter loop for columns.
// Step 4: crete inner loop for rows.
// Step 5: create a conditional statement for print * or space and store in string.
// Step 6: Then execute the outter loop code statement.
// Step 7: continue this loop until the outter loop is finished.
// Step 8: return string value.

function printStarPattern(number) {
  if (number <= 0) {
    console.log("Please enter a positive number");
    return;
  }
  if (typeof number === "string" || Number.isNaN(number)) {
    console.log("Please enter a valid number");
    return;
  }
  let stars = "";
  for (let index = 0; index < number; index++) {
    for (let index2 = 0; index2 <= (number - 1) * 2; index2++) {
      if (index2 >= index && index2 <= (number - 1) * 2 - index) {
        stars += "*";
      } else {
        stars += " ";
      }
    }
    stars += "\n";
  }
  return stars;
}
console.log("testing 1");
console.log(printStarPattern(5));

console.log("testing 2");
console.log(printStarPattern("5"));

console.log("testing 3");
console.log(printStarPattern("jitu"));

console.log("testing 4");
console.log(printStarPattern(null));

console.log("testing 5");
console.log(printStarPattern(true));

// console.log("testing 6");
// console.log(printStarPattern(5.8));

// console.log("testing 7");
// printNumber(-5.9);