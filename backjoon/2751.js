let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim().split('\n').map(v=>+v);

const n=input[0]
const array=input.splice(1,input.length-1)
array.sort((a,b)=>a-b)

console.log(array.join("\n"))
