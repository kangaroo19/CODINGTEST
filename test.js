const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' '));
const k=nums[0].shift()
const l=nums[0].shift()
nums.shift()

let array=[]
for(let i=0;i<l;i++){
    array.push(nums[i][0])   
}

let map=new Map()
for(let i=0;i<l;i++){
    if(!map.has(array[i])){
        map.set(array[i],1)
    }
    else{
        map.delete(array[i])
        map.set(array[i],1)
    }
}

let count=0
let answer=[]
map.forEach((value,key)=>{
    if(count<k){
        answer.push(key)
        count++
    }
})

console.log(answer.join("\n"))
