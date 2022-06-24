const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(x => +x));
const n=nums[0].shift()

const array=[]
for(let i=0;i<n;i++) array.push(nums[1][i])

let start=0
let end=0

while(start<n){
    if(start==end){
        end++
        continue
    }
    
}

