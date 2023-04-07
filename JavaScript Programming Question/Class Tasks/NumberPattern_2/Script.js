// Input must be a positive number.
// Input number is less than equal to zero then output should be "please enter a positive number"
// Input is String and Not a Number(NaN) then output should be "please enter a valid number"
// Count of number decrease every new line

function printStarPattern(number) {
  if (number <= 0) {
    console.log("Please enter a positive number");
    return;
  }
  if (typeof number === "string" || Number.isNaN(number)) {
    console.log("Please enter a valid number");
    return;
  }
  let numbersPattern = "";
  for (let index = 1; index <= number; index++) {
    for (let index2 = index; index2 <= number; index2++) {
      numbersPattern += index2;
    }
    numbersPattern += "\n";
  }
  return numbersPattern;
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

console.log("testing 6");
console.log(printStarPattern(5.8));

console.log("testing 7");
console.log(printStarPattern(-5.9));
