// One input parameter
const divide = (x) => x / 5;
const result = divide(125);
console.log(result);

// two input parameter
const multiple = (num1, num2) => (num1 + 2) * (num2 + 2);
const inputNumber = multiple(2, 5);
console.log(inputNumber);

// input three parameters
const multiplication = (a, b, c) => a * b * c;
const myNumber = multiplication(2, 3, 4);
console.log(myNumber);

// multiline arrow function
const multiple2 = (x, y) => {
  const multiplication1 = (x + 2) * (y + 2);
  return multiplication1;
};
const yourNumber = multiple2(5, 3);
console.log(yourNumber);
