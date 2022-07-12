const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split(' ');
const n=Number(input)
const dp=[0,1]

for(let i=2;i<=n;i++){
    if(i%Math.sqrt(i)==0) dp[i]=1
    else dp[i]=dp[i-1]+1
}
console.log(dp[n])
