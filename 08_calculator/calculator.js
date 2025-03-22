const add = function (a, b) {
  let add = a + b;
  return add;
};

const subtract = function (a, b) {
  let sub = a - b;
  return sub;
};

const sum = function (array) {
  let sumOfAll = array.reduce((num, current) => num + current, 0);
  return sumOfAll;
};

const multiply = function (array) {
  let multiply = array.reduce((base, currentValue) => base * currentValue);
  return multiply;
};

const power = function (num1, num2) {
  let powerSum = num1;
  for (let index = 1; index < num2; index++) {
    powerSum *= num1;
  }
  return powerSum;
};

const factorial = function (num) {
  let num2 = num;
  let fact = num;
  if (num == 0) {
    return 1;
  }
  else {
    while (num2 > 1) {
      num2--
      fact *= num2;

    }

    return fact;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
