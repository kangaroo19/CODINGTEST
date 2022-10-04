const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split(' ').map(v=>+v);
const n=input[0]

const dp=[[0,1,1,1,1,1,1,1,1,1]]

for(let i=1;i<n;i++){
    dp[i]=[Array(10).fill(0)]
    for(let j=0;j<=9;j++){
        dp[i][j]=((dp[i-1][j-1] || 0)+(dp[i-1][j+1] || 0))%1000000000
        // || 0은 없으면 0반환
    }
}

console.log(dp[n-1].reduce((a,c)=>a+c))
