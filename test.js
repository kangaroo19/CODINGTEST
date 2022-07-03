const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(v=>+v));
const t=nums[0].shift()

for(let i=0;i<t;i++){
    let k=nums[i*2+1][1]
    let array=nums[i*2+2]
    array.sort((a,b)=>a-b)
    let start=0
    let end=array.length-1
    let answer=[]
    let min=9999
    let count=0
    while(start<end){
        let sum=array[start]+array[end]
        if(sum>k) end--
        else if(sum<k) start++
        else start++

        if(min>Math.abs(sum-k)){
            min=Math.abs(sum-k)
        }
        else if(Math.abs(sum-k)===min) count++
        
    }
    console.log(count+1)
}

    
    



