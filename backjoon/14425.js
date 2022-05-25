const input = require("fs").readFileSync("example.txt").toString().split(/\s/);

const n = +input[0];
const arr1 = input.slice(2, n + 2);
const arr2 = input.slice(n + 2);

const set = new Set(arr1);

let answer = 0;

arr2.forEach((value => {
  if (set.has(value)) ++answer
}))

console.log(answer)

//처음에는 arr2까지 집합으로 만들어 했는데
//arr2에는 중복값이 있을 수도 있다고 해서
//arr2는 일반 배열로 했음