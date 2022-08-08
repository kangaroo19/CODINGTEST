const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(x => +x));
const n=nums[0][0]
const k=nums[0][1]
const array=nums[1]

array.sort((a,b)=>b-a)
console.log(array[k-1])