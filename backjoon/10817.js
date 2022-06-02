const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split(' ').map(v=>+v);
input.sort((a,b)=>a-b)
console.log(input[1])