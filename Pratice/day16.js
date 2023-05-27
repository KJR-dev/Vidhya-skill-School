const calculator = (a, b, op) => {
    // Guard Block Approach
    if (op === "+") {
      return a + b;
    }
  
    if (op === "-") {
      return a - b;
    }
  
    if (op === "*") {
      return a * b;
    }
  
    if (op === "/") {
      return a / b;
    }
  
    if (op === "%") {
      return a % b;
    }
  
    return "Not a valid mathematical operation";
  };
  
  const calculatorV2 = (a, b, op) => {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
      case "%":
        return a % b;
      default:
        return "Not a valid mathematical operation";
    }
  };
  
  const add = (num1, num2) => num1 + num2;
  const subtract = (num1, num2) => num1 - num2;
  const multiply = (num1, num2) => num1 * num2;
  const divide = (num1, num2) => num1 / num2;
  const modulas = (num1, num2) => num1 % num2;
  
  const calculatorV3 = (a, b, op) => {
    switch (op) {
      case "+":
        return add(a, b);
      case "-":
        return subtract(a, b);
      case "*":
        return multiply(a, b);
      case "/":
        return divide(a, b);
      case "%":
        return modulas(a, b);
      default:
        return "Not a valid mathematical operation";
    }
  };
  
  console.log("Add: ", calculator(10, 70, "+")); // Add
  console.log("Subtract: ", calculator(10, 70, "-")); // Subtract
  console.log("Multiply: ", calculator(10, 70, "*")); // Multiply
  console.log("Divide: ", calculator(10, 70, "/")); // Divide
  console.log("Divide: ", calculator(10, 70, "%")); // Divide
  







const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
const modulas = (num1, num2) => num1 % num2;
const addAndMinusTwo = (num1, num2) => num1 + num2 - 2;

const calculator = (a, b, callbackFn) => {
  return callbackFn(a, b);
};

console.log("Add: ", calculator(10, 70, add)); // Add
console.log("Subtract: ", calculator(10, 70, subtract)); // Subtract
console.log("Multiply: ", calculator(10, 70, multiply)); // Multiply
console.log("Divide: ", calculator(10, 70, divide)); // Divide
console.log("Divide: ", calculator(10, 70, modulas)); // Mode
console.log("Divide: ", calculator(10, 70, addAndMinusTwo)); // AddAndMinusTwo







const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
const modulas = (num1, num2) => num1 % num2;
const addAndMinusTwo = (num1, num2) => num1 + num2 - 2;

const saveToLocalStorage = (data) => {
  const saved = JSON.parse(localStorage.getItem("history")) || [];
  saved.push(data);
  localStorage.setItem("history", JSON.stringify(saved));
};

const calculator = (a, b, callbackFn) => {
  a = Number(a);
  b = Number(b);

  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    typeof callbackFn !== "function"
  ) {
    throw new Error("Please enter a valid number");
  }

  const result = callbackFn(a, b);

  // Creating the history object
  const operation = {
    a: a,
    b: b,
    result: result,
  };

  // Saving to history
  saveToLocalStorage(operation);

  return result;
};

console.log("Add: ", calculator(100, 70, add)); // Add
console.log("Subtract: ", calculator(110, 70, subtract)); // Subtract
console.log("Multiply: ", calculator(10, 740, multiply)); // Multiply
console.log("Divide: ", calculator(1220, 7330, divide)); // Divide
console.log("Divide: ", calculator(1340, 7240, modulas)); // Mode
console.log("Divide: ", calculator(210, 470, addAndMinusTwo)); // AddAndMinusTwo

























function addV2(a, b) {
  return a + b;
}
const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
const modulas = (num1, num2) => num1 % num2;
const addAndMinusTwo = (num1, num2) => num1 + num2 - 2;

const operations = {
  "+": (num1, num2) => num1 + num2,
  "-": (num1, num2) => num1 - num2,
  "*": (num1, num2) => num1 * num2,
  "/": (num1, num2) => num1 / num2,
  "%": (num1, num2) => num1 % num2,
};

const saveToLocalStorage = (data) => {
  const saved = JSON.parse(localStorage.getItem("history")) || [];
  saved.push(data);
  localStorage.setItem("history", JSON.stringify(saved));
};

const calculator = (a, b, meraPersonalFn) => {
  a = Number(a);
  b = Number(b);

  if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    typeof meraPersonalFn !== "function"
  ) {
    throw new Error("Please enter a valid number");
  }

  const result = meraPersonalFn(a, b);

  // Creating the history object
  const operation = {
    a: a,
    b: b,
    result: result,
  };

  // Saving to history
  saveToLocalStorage(operation);

  return result;
};

const currentOperation = document.getElementById("operation");
console.log("Add: ", calculator(100, 70, operations[currentOperation])); // Add

console.log("Add: ", calculator(100, 70, add)); // Add
console.log("Add: ", calculator(100, 70, addv2)); // Add
console.log(
  "Add: ",
  calculator(100, 70, function () {
    return a + b;
  })
); // Add
console.log("Subtract: ", calculator(110, 70, subtract)); // Subtract
console.log("Multiply: ", calculator(10, 740, multiply)); // Multiply
console.log("Divide: ", calculator(1220, 7330, divide)); // Divide
console.log("Divide: ", calculator(1340, 7240, modulas)); // Mode
console.log("Divide: ", calculator(210, 470, addAndMinusTwo)); // AddAndMinusTwo

function calculate(operator) {
  console.log({ operator, logic: operations[operator] });
  console.log("Subtract: ", calculator(110, 70, operations[operator]));
}
