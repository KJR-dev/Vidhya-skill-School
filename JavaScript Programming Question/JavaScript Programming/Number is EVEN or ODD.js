// Program to check whether number is EVEN or ODD.

// step 1: call to function like checkEvenOdd(inputNumber)
// step 2: Describe the function defination
// step 3: Check even number or not
// step 4: Return boolean value

function checkEvenOdd(inputNumber) {
  if (inputNumber % 2 === 0) return true;
  else return false;
}

let inputNumber = 12;
let result = checkEvenOdd(inputNumber);
if (result) 
    console.log("it is even number");
else
    console.log("it is odd number");
