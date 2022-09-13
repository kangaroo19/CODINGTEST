const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(v=>+v));
const input1=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums1 = input1.map(v => v.split(' ').map(v=>+v));
const a=nums[1]
const n=nums[0].shift()
const array=nums[1]
const sortArray=array.sort((a,b)=>b-a)
let map=new Map()
let answer=[]
for(let i=0;i<n;i++){
    map.set(array[i],0)
}
map.forEach((value,key)=>{
    answer.push([key,value])
})
for(let i=0;i<answer.length;i++){
    answer[i][1]=answer.length-(i+1)   
}

answer.sort((a,b)=>a[0]-b[0])

let answer2=[]
function bs(array,target){
    let left=0
    let right=array.length-1
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        if(array[mid][0]===target) return answer2.push(array[mid][1]) 

        if(array[mid][0]>target) right=mid-1
        else left=mid+1
    }
}

for(let i=0;i<n;i++){
    bs(answer,nums1[1][i])
}
console.log(answer2.join(" "))