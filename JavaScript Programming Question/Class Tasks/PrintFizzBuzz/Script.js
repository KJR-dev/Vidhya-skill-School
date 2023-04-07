// input must should be number
// input number is 0 or  then negetive number output should be  "please enter a positive number"
// input number is string or not a number(NaN) then output should be "please enter a valid number"
// Otherwise you print the number.





function printFizzBuzz(inputNumber) {
  if (inputNumber <= 0) {
    console.log("Please enter a number Positive number.");
    return;
  }
  if (typeof inputNumber === "string" || Number.isNaN(inputNumber)) {
    console.log("Please enter a valid Positive number.");
    return;
  }
  for (let index = 1; index <= inputNumber; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      console.log(index + " FizzBuzz");
    } else if (index % 5 === 0) {
      console.log(index + " Buzz");
    } else if (index % 3 === 0) {
      console.log(index + " Fizz");
    } else {
      console.log(index);
    }
  }
}
printFizzBuzz(100);
