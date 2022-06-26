const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(x => +x));
const t=nums[0][0]
let count=0

while(count<t){
    let answer=[]
    let n=nums[count*4+1][0]
    let m=nums[count*4+3][0]
    let array1=nums[count*4+2]
    let array2=nums[count*4+4]
    array1.sort((a,b)=>a-b)

    for(let i=0;i<m;i++){
        let target=array2[i]
        let left=0
        let right=n-1
        let mid=0
        while(left<=right){
            mid=Math.floor((left+right)/2)
            if(target===array1[mid]){
                answer[i]=1
                break
            }
            if(target<array1[mid]) right=mid-1
            else left=mid+1
        }
    }
    for(let i=0;i<m;i++){
        if(answer[i]===undefined) answer[i]=0
    }
    console.log(answer.join("\n"))
    count++
}
//계속 오류나와서 해결못했는데
//26행에 target<mid로 했ㅇ엇음..