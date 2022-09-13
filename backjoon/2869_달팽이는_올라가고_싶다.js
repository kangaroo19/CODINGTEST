const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split(' ').map(v=>+v);
const n=input.shift()
const m=input.shift()
const v=input.shift()

console.log(Math.ceil((v-m)/(n-m)))