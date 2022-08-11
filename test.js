const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split(' ').map(v=>+v);
let n=input[0]
const dp=[1,2,5]

for(let i=3;i<=n;i++){
    for(let j=0;j<i;j++){
        dp[i]=dp[i-1]
    }
}
