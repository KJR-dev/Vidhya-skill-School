function printNumber(inputNumber) {
  inputNumber /= 100;
  if (typeof inputNumber !== "number" || Number.isNaN(inputNumber)) {
    console.log("please enter a number");
    return;
  }
  if (inputNumber < 0) {
    console.log("Please enter a positive number");
    return;
  }
  for (let i = 0; i <= inputNumber; i++) {
    console.log(i*100);
  }
}
console.log("testing 1")
printNumber(567)

console.log("testing 2")
printNumber("567")

console.log("testing 3")
printNumber("jitu")

console.log("testing 4")
printNumber(null)

console.log("testing 5")
printNumber(true)

console.log("testing 6")
printNumber(58.9)

console.log("testing 7")
printNumber(-58.9)


