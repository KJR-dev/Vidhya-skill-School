function outer() {
    let counter = 10;

    return function incrementCounter(num) {
      counter += num;
      return counter;
    };
  }

  let myFunc = outer();
  console.log(myFunc(1)); // 11
  console.log(myFunc(2)); // 13
  console.log(myFunc(3)); // 16
  console.log(myFunc(4)); // 20