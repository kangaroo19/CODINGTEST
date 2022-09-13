const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split(' ').map(v=>BigInt(v));
const n=input.shift()

const dp=[0n,1n]

for(let i=2;i<=n;i++){
    dp[i]=dp[i-1]+dp[i-2]
}

console.log(dp[n].toString())
