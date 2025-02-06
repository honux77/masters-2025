const fs = require("fs");
var char = fs.readFileSync("/dev/stdin").toString();
console.log(char.charCodeAt(0));
