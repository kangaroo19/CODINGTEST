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


for(let i=0;i<m;i++){
    for(let j=0;j<n;j++){
        if(array2[i]==array1[j]){
            answer[i]=1
        }
    }
    if(answer[i]==null)answer[i]=0
}
console.log(answer)
//답은 맞는데 시간초과 이분탐색 사용해야된다함