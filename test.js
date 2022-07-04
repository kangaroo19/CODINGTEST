const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(v=>+v));
const t=nums[0].shift()
nums.shift()

let answer=[]
for(let i=0;i<t;i++){
    let array=nums[i]
    array.sort((a,b)=>a-b)
    answer.push(array[7])
}

console.log(answer.join("\n"))

