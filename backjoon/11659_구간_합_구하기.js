const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(v=>+v));

const n=nums[0].shift()
const m=nums[0].shift()

const array=nums[1]

let allSum=[0]
array.forEach((v,i)=>{ //a->요소 b->인덱스번호
    allSum[i+1]=allSum[i]+v
})
allSum.shift()

let answer=[]
for(let i=0;i<m;i++){
    let left=nums[i+2][0]
    let right=nums[i+2][1]
    if(left-2<0){
        answer.push(allSum[right-1]) 
        continue
    }
    answer.push(allSum[right-1]-allSum[left-2])
}

console.log(answer.join("\n"))