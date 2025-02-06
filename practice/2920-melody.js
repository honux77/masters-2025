const fs = require("fs");
var asc = false;
var dsc = false;

var melodies = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

for (var i = 0; i < melodies.length - 1; i++) {
  if (melodies[i] < melodies[i + 1]) {
    asc = true;
  } else if (melodies[i] > melodies[i + 1]) {
    dsc = true;
  }
}
if (asc && dsc) {
  console.log("mixed");
} else if (asc) {
  console.log("ascending");
} else {
  console.log("descending");
}
