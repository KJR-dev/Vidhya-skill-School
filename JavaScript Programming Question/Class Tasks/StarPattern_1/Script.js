// Input must be a positive number.
// Input number is less than equal to zero then output should be "please enter a positive number"
// Input is String and Not a Number(NaN) then output should be "please enter a valid number"
// Star decrease every new line

function printStarPattern(number){
  if(number <= 0){
    console.log("Please enter a positive number");
    return
  }
  if(typeof number ==="string" || Number.isNaN(number)){
    console.log("Please enter a valid number");
    return
  }
  let stars = "";
  for (let index = number; index > 0; index--) {
    for (let index2 = 0; index2 < index; index2++) {
      stars +="*"
    }
    stars +="\n"
  }
  return stars
}

console.log("testing 1")
console.log(printNumber(5))

console.log("testing 2")
console.log(printNumber("5"))

console.log("testing 3")
console.log(printNumber("jitu"))

console.log("testing 4")
console.log(printNumber(null))

console.log("testing 5")
console.log(printNumber(true))

console.log("testing 6")
console.log(printNumber(5.8))

console.log("testing 7")
console.log(printNumber(-5.9))