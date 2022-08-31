const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split(' ').map(v=>+v);

const n=input.shift()
const dp=[1,1,2]

