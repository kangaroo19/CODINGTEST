const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(x => +x));
const n=+nums[0].shift()
const m=+nums[1].shift()
const array=[]
for(let i=0;i<n;i++) array.push(Number(nums[2][i]))

array.sort((a,b)=>a-b)
let start=0
let end=array.length-1
let count=0
while(start!==end){
    let value=array[start]+array[end]
    if(value<m) start++
    else if(value>m) end--
    else{
        start++
        count++
    }
}

console.log(count)