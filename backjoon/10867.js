const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(v=>+v));
const n=nums[0].shift()
nums.shift()

let array=[]
for(let i=0;i<n;i++) array.push(nums[0][i])

let map=new Map()
let answer=[]
for(let i=0;i<n;i++){
    map.set(array[i],0)

}

map.forEach((value,key)=>{
    answer.push(key)
})

answer.sort((a,b)=>a-b)
console.log(answer.join(" "))
