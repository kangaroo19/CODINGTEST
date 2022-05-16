const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(x => +x));
const n=nums[0][0]
const m=nums[2][0]
const array1=[]
const array2=[]
const answer=[]
for(let i=0;i<n;i++)array1[i]=nums[1][i]
for(let i=0;i<m;i++)array2[i]=nums[3][i]

array1.sort((a,b)=>a-b)


function f(num,dataArray){
    let left=0;
    let right=m-1
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        let midValue=dataArray[mid]
        if(midValue===num){
            return 1
        }
        else if(midValue<num){
            left=mid+1
        }
        else{
            right=mid-1
        }
    }
    return 0
}

for(let i of array2){
    answer.push(f(i,array1))
}
console.log(answer.join(" "))

//답은 맞는데 시간초과 이분탐색 사용해야된다함