const fs = require("fs");
var numbers = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);
console.log(numbers);
