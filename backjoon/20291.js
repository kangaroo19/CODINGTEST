const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' '));
const n=Number(nums[0].shift())
nums.shift()

const array=[]
for(let i=0;i<n;i++){
    if(i===7) array.push(nums[i][0])
    else array.push(nums[i][0].substring(0,nums[i][0].length-1))
}
let array2=[]
for(let i=0;i<n;i++){
    array2.push(array[i].split('.'))
}
let onlyExtension=[]

for(let i=0;i<array2.length;i++){
    onlyExtension.push(array2[i][1])
}

let map=new Map()
let answer=[]
for(let i=0;i<onlyExtension.length;i++){
    if(!map.has(onlyExtension[i])) map.set(onlyExtension[i],1)
    else map.set(onlyExtension[i],map.get(onlyExtension[i])+1)
}

map.forEach((value,key)=>{
    answer.push([key,value])
})

answer.sort()
let answer2=''
for(let i=0;i<answer.length;i++){
    answer2+=answer[i][0]+" "+answer[i][1]+"\n"
}

console.log(answer2)
