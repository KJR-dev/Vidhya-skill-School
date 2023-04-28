// Unique values only from 2 arrays i.e. intersection values
// const inputA = [1, 2, 3, 4, 5, 1];
// const inputB = [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8];

// // Output
// [1, 2, 3, 4, 5,];



var arra1 = [1, 2, 3, 4, 5];
  var arra2 = [1, 2, 3, 4, 5, 6, 7];
  var arra3 = [];

  for (var j = 0; j < arra2.length; j++) {
    if (arra1.includes(arra2[j])) {
      arra3.push(arra2[j]);
    }
  }
  console.log(arra3);