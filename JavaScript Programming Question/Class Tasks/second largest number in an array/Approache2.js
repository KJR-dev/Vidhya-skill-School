/* The code is defining a function called `largestSecondNumber` that takes in an array and a position
number as arguments. The function then sorts the array in ascending order using a nested loop and
swapping numbers. If there are any duplicate numbers in the array, they are removed. Finally, the
function returns the second largest number in the array based on the position number provided. The
code then calls the function with a sample array and position number and logs the result to the
console. */
//To find the second largest number in an array

// Step 1: function call and pass array and positionNumber
// Step 2: Create function definition
// Step 3: apply loop for linear sorting
// Step 4: appli swaping number for linear sorting
// step 5: return array[array.length-positionNumber]
// Step 6: print return number

/* `largestSecondNumber` is a function that takes in an array and a position number as
arguments. It sorts the array in ascending order using a nested loop and swapping numbers.
If there are any duplicate numbers in the array, they are removed. Finally, the function
returns the second largest number in the array based on the position number provided. The
code then calls the function with a sample array and position number and logs the result to
the console. */
function largestSecondNumber(inputArray, positionNumber) {
  let temp;
  for (let index1 = 0; index1 < inputArray.length - 1; index1++) {
    for (let index2 = index1 + 1; index2 < inputArray.length; index2++) {
      if (inputArray[index2] < inputArray[index1]) {
        temp = inputArray[index2];
        inputArray[index2] = inputArray[index1];
        inputArray[index1] = temp;
      }
      if (inputArray[index2] === inputArray[index1]) {
        for (let index3 = index2; index3 < inputArray.length; index3++) {
          inputArray[index3] = inputArray[index3 + 1];
        }
        inputArray.length = inputArray.length - 1;
      }
    }
  }
  return inputArray[inputArray.length - positionNumber];
}

/* `let inputArray = [12, 34, 23, 45, 76, 32, 65, 21,76,23];` is initializing an array called
`inputArray` with 10 elements. The elements are 12, 34, 23, 45, 76, 32, 65, 21, 76, and 23. This
array is used as an argument when calling the `largestSecondNumber` function. */
let inputArray = [12, 34, 23, 45, 76, 32, 65, 21, 76, 23];
/* `let positionNumber=3;` is initializing a variable called `positionNumber` with a value of 3. This
variable is used as an argument when calling the `largestSecondNumber` function to determine the
position of the second largest number in the array. */
let positionNumber = 3;
/* `console.log(largestSecondNumber(inputArray,positionNumber));` is calling the `largestSecondNumber`
function with the `inputArray` and `positionNumber` arguments, and then logging the returned value
(which is the second largest number in the array based on the position number provided) to the
console. */
console.log(largestSecondNumber(inputArray, positionNumber));
