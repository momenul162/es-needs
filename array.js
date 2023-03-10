// oneLine array.map with arrow function
const multipledByFive = [3, 5, 8, 6, 9, 12, 45, 35, 85].map((x) => x * 5);
console.log(multipledByFive);

// array.filter
const numbers = [10, 13, 5, 85, 64, 75, 26, 99];
const oddNumber = numbers.filter((number) => number % 2 != 0);
console.log(oddNumber);

// object in array use find
const products = [
  { name: "Mobile", price: 15000 },
  { name: "watch", price: 5000 },
  { name: "tab", price: 12000 },
  { name: "headphone", price: 5000 },
  { name: "laptop", price: 50000 },
  { name: "bike", price: 250000 },
];
const result = products.find((n) => n.price == 5000);
console.log(result);
