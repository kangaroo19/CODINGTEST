const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n').map(v=>+v);
const t=input[0]

let dp=[1,2,4]
for(let i=1;i<=t;i++){
    const n=input[i]
    for(let i=3;i<=n;i++){
        dp[i]=dp[i-1]+dp[i-2]+dp[i-3]
    }
    console.log(dp[n-1])
}
