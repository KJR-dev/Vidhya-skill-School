function printNumber(number) {
  if (typeof number !== "number" || Number.isNaN(number)) {
    console.log("Please enter a valid number");
    return;
  }
  if (number < 0) {
    console.log("Please enter only positive number");
    return;
  }
  for (let index1 = 1; index1 <= number; index1++) {
    for (let index2 = 0; index2 < 3; index2++) {
      console.log(index1);
    }
  }
}
console.log("testing 1");
printNumber(5);

console.log("testing 2");
printNumber("5");

console.log("testing 3");
printNumber("jitu");

console.log("testing 4");
printNumber(null);

console.log("testing 5");
printNumber(true);

console.log("testing 6");
printNumber(5.9);

console.log("testing 7");
printNumber(-5.9);