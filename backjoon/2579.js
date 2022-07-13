const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n').map(v=>+v);
const n=input[0]

const array=input

const dp=[0,0] //최댓값 저장하는 배열

dp[1]=array[1]
dp[2]=dp[1]+array[2]
dp[3]=Math.max(array[1]+array[3],array[2]+array[3])

for(let i=4;i<=n;i++){
    dp[i]=Math.max(dp[i-3]+array[i-1]+array[i],dp[i-2]+array[i])
}

console.log(dp[n])