const add = (addendOne, addendTwo) => addendOne + addendTwo;

const subtract = (minuend, subtrahend) => minuend - subtrahend;

const multiply = (multiplicand, multiplier) => multiplicand * multiplier;

const divide = (dividend, divisor) => dividend / divisor;

const sum = (numbers) =>
  numbers.reduce((total, currentNumber) => total + currentNumber);

export { add, subtract, multiply, divide };
