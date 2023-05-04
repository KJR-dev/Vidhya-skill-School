//find largest number among three numbers
// 12 45 21
// step 1: create 3 variables
// step 2: call to the function and pass 3 vriables
// step 3: write function defination
// step 4:write some for finding largestest variable
// step 5: return largest variable
function largestVariable(x, y, z) {
  if (x > y && x > z) return x;
  else if (y > z) return y;
  else return z;
}

let a = 120;
let b = 4;
let c = 21;
console.log(largestVariable(a, b, c));
