const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(v=>+v));
const n=Number(nums[0].shift())
nums.shift()
let array=[]

for(let i=0;i<n;i++) array.push(nums[0][i])

let maxValue=1
let plus=1

let mem=[]
for(let i=0;i<n;i++){
    if(array[i]<=array[i+1]){
        plus++
    }
    else{
        plus=1
    }
    maxValue=Math.max(maxValue,plus)
}
for(let i=0;i<n;i++){
    if(array[i]>=array[i+1]){
        plus++
    }
    else{
        plus=1
    }
    maxValue=Math.max(maxValue,plus)
}


console.log(maxValue)

