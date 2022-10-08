const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n').map(v=>+v);
const n=input[0]
const dp=new Array(n).fill(0)
dp[1]=input[1]
dp[2]=input[1]+input[2]

for(let i=3;i<=n;i++){
    dp[i]=Math.max(dp[i-3]+input[i-1]+input[i],dp[i-2]+input[i],dp[i-1])
}
console.log(dp[n])


//첫번째 경우 => dp[n-3]이후에 n-2거르고 n-1,n 선택
//두번째 경우 => dp[n-2]이후에 n 선택
//세번째 경우 => dp[n-1]만