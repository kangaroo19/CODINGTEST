const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n').map(v=>+v);
const t=input.shift()
let dp=[]
dp=[0,1,1,1,2,2]
answer=""
for(let i=0;i<t;i++){
    n=input[i]
    for(let i=5;i<=n;i++){
        dp[i]=dp[i-1]+dp[i-5]
    }
    answer+=dp[n]+"\n"
}

console.log(answer)
