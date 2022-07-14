const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(v=>+v));
const n=nums[0].shift()
nums.shift()

const arrayA=nums[0]
const arrayB=nums[1]

arrayA.sort((a,b)=>a-b)
arrayB.sort((a,b)=>b-a)

let sum=0
for(let i=0;i<n;i++){
    sum+=arrayA[i]*arrayB[i]
}

console.log(sum)