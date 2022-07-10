const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(v=>+v));
const n=nums[0].shift()
const s=nums[0].shift()

const array=nums[1]


let start=0
let end=0
let answer=[]
let value
const allSum=[0]
array.forEach((v,i)=>{
    allSum[i+1]=allSum[i]+v
})


while(start<=n && end<=n){
    
    value=0
    if(start<end){
        if(start-1<0){
            value=allSum[end]
        }   
        else{
            value=allSum[end]-allSum[start-1]
        }
    }
    else{
        if(end-1<0){
            value=allSum[start]
        }
        else{
            value=allSum[start]-allSum[end-1]
        }
    }
    
    //console.log(value)
    if(value>=s){
        answer.push([Math.abs(start-end)+1,start,end,value])
        start++    
    }
    else{
        end++
    }
}
//console.log(answer)
let min=9999999999
let answer2=0
for(let i=0;i<answer.length;i++){
    if(answer[i][1]===answer[i][2]&&answer[i][3]>=s){
        answer2=1
        break;
    }
    if(answer[i][0]===1) continue
    if(min>answer[i][0]) min=answer[i][0]
}
if(answer2===1) console.log(1)
else console.log((min===9999999999)?0:min)
