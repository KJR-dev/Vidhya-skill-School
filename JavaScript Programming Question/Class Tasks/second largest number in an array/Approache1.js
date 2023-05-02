/* The comment `To find the second largest number in an array` is describing the purpose of the code
that follows it. It is indicating that the code will contain a function that takes an array of
numbers as input and returns the second largest number in the array. */
//To find the second largest number in an array

// Step 1: intialize an Array [inputArray] and pass in fuction call like largestSecondNumber(inputArray)
// Step 2: Inside the function definition
        //Step 2.1: Initialize 2 variables i.e. largestFirstNumber and largestSecondNumber and assign inputArray[0] in both local variables.
        // Step 2.2: Doing looping of largestSecondNumber function
        // Step 2.3: Checking inputArray[index] > largestFirstNumber
                    // Step 2.3.1: largestSecondNumber=largestFirstNumber
                    // Step 2.3.2: largestFirstNumber=inputArray[index]
        // Step 2.4: Checking inputArray[index] < largestFirstNumber && inputArray[index] > largestSecondNumber
                    // Step 2.4.1: largestSecondNumber=inputArray[index]
        // Step 2.5: continue looping for looping condition
// Step 3: Return largestSecondNumber
// Step 4: print return value

/**
 * The function finds the second largest number in an array of numbers.
 * @param inputArray - an array of numbers for which we want to find the second largest number.
 * @returns the second largest number in the input array.
 */
function largestSecondNumber(inputArray) {

  /* These two lines of code are initializing two variables `largestFirstNumber` and
  `largestSecondNumber` with the first element of the `inputArray`. These variables will be used to
  keep track of the largest and second largest numbers in the array as the function iterates over
  the array. */
  let largestFirstNumber = inputArray[0];
  let largestSecondNumber = inputArray[0];
  
  /* This is a for loop that iterates over the elements of the inputArray starting from the second
  element (index 1). Inside the loop, it checks if the current element is greater than the
  largestFirstNumber. If it is, then it updates the largestSecondNumber to the value of
  largestFirstNumber and largestFirstNumber to the value of the current element. This ensures that
  the largestFirstNumber is always the largest number in the array. */
  for (let index = 1; index < inputArray.length; index++) {
    if (inputArray[index] > largestFirstNumber) {
      largestSecondNumber = largestFirstNumber;
      largestFirstNumber = inputArray[index];
    }
    if (
      inputArray[index] < largestFirstNumber &&
      inputArray[index] > largestSecondNumber
    ) {
      largestSecondNumber = inputArray[index];
    }
  }
  return largestSecondNumber;
}
/* Creating an array of numbers and assigning it to the variable `inputArray`. Then it is calling the
function `largestSecondNumber` with `inputArray` as an argument and logging the returned value to
the console. The function finds and returns the second largest number in the array. */
let inputArray = [12, 34, 23, 45, 76, 32, 65, 12, 65];
console.log(largestSecondNumber(inputArray));
