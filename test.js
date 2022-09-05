const fs = require("fs");
const input = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString()
  : `4
9 5 4 8`
)
  .split("\n")[1]
  .split(" ")
  .map((a) => +a);

let stack = [];
let result = new Array(input.length).fill(-1);

for (let i = 0; i < input.length; i++) {
  while (stack.length && input[stack[stack.length - 1]] < input[i]) {
    result[stack.pop()] = input[i];
  }
  stack.push(i);
}
console.log(result.join(" "));