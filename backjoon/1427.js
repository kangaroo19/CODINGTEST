const input = require('fs').readFileSync('example.txt').toString().trim().split('').map(v=>+v);
input.sort((a,b)=>b-a)

console.log(input.join(""))