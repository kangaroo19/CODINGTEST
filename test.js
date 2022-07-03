const fs=require('fs');
const input1=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input1.map(v => v.split(' '));
const n=nums[0].shift()
const m=nums[0].shift()
nums.shift()

const input=[]
for(let i=0;i<n;i++){
    if(i===n-1) input.push(nums[i][0])
    else input.push(nums[i][0].substring(0,nums[i][0].length-1))
    if(input[i].length<m) input[i]=0
}

let map=new Map()
for(let i=0;i<n;i++){
    if(!map.has(input[i])) map.set(input[i],1)
    else map.set(input[i],map.get(input[i])+1)
    map.delete(0)
}
let array=[]
map.forEach((value,key)=>{
    array.push([key,value])
})

array.sort((a,b)=>{
    if(b[0].length===a[0].length) return 
    else if(a[1]===b[1]) return b[0].length-a[0].length
    else return b[1]-a[1]
})
let answer=[]
for(let i=0;i<array.length;i++){
    answer.push(array[i][0])
}

console.log(answer.join('\n'))

