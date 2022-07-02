//const { FORMERR } = require('dns');
const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(v=>+v));
const n=nums[0].shift()
const s=nums[0].shift()

const array=[]
for(let i=0;i<n;i++) array.push(nums[1][i])

let start=0
let end=0
let answer=[]
let value
let count
while(start<n && end<n){
    value=0
    if(count<=end){
        count=start
        value+=array[count]
        count++
    }
    if(value>=s){
        answer.push(end-start+1)
        start++
    } 
   else{
        end++
    }  
    
}
console.log(answer)
answer.sort((a,b)=>a-b)

if(answer[0]===0) console.log(0)
else console.log(answer[0])