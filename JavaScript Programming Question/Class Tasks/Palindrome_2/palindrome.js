//find the  palindrome and largest lenght from the given string.

function palindromeString(input) {
  if (typeof input !== "string") {
    console.log("please enter a string");
    return;
  }
  input = input.toLowerCase();
  input = input.replace(",", "");
  input = input.replace(".", "");
  input = input.split(" ");
  console.log(input);
  console.log(palindromeSubstring(input));
}
function palindromeSubstring(inputString) {
  let maxPalindromeLength = 0;
  let palindromeString = "";
  for (let index = 0; index < inputString.length; index++) {
    let tempArray = "";
    for (let index2 = 0; index2 < inputString.length; index2++) {
      if (typeof inputString[index][index2] != "undefined") {
        tempArray = tempArray + inputString[index][index2];
      }
    }
    if (isPalindrome(tempArray) === true) {
      maxPalindromeLength = tempArray.length;
      palindromeString = palindromeString + tempArray + " ";
    }
  }
  // console.log(palindromeString.split(" "));
  // console.log(maxPalindromeLength);
  return {
    matches: palindromeString.split(" "),
    maxPalindromeLength,
  };
}
function isPalindrome(inputString) {
  let isPalindrome = "";
  for (let index = inputString.length - 1; index >= 0; index--) {
    isPalindrome = isPalindrome + inputString[index];
  }
  if (isPalindrome === inputString) {
    return true;
  }
  return false;
}

let string = "Good Morning, I am Jitendra Sahoo it is my racecar.";
palindromeString(string);
