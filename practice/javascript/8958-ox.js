const fs = require("fs");
const lines = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = parseInt(lines[0]);
const oxes = lines.slice(1);

for (let i = 0; i < n; i++) {
  let ox = oxes[i];
  let score = 0;
  let count = 0;
  for (let i = 0; i < ox.length; i++) {
    if (ox[i] === "O") {
      count++;
      score += count;
    } else {
      count = 0;
    }
  }
  console.log(score);
}
