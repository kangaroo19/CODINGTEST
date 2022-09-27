let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim().split('').sort((a,b)=>b-a);
const n=Number(input.join(""))
console.log((n%30===0)?n:-1)


