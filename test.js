const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(x => +x));
const n=nums[0][0]
let array=nums[1]
let stack=[]

for(let i=0;i<n;i++){
    while(stack.length!==0 && array[i]>)
}