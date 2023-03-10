// object destructuring
const details = {
  name: "Mahbur Talukdar",
  id: 001,
  address: {
    vill: "pardilalpur",
    post: "kansat",
    thana: "shibganj",
    district: "chapai-nawabganj",
  },
  //
};
const {
  address: { thana },
} = details;
console.log(thana);

// array destructuring
const numbers = [45, 55, 65, 15, 85];
const [a, b, c, d] = numbers;
const three = d;
console.log(three);
