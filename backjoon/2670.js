const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n').map(v=>+v);

const n=input.shift()
const array=input
const dp=[array[0]]


for(let i=1;i<n;i++){
    dp[i]=array[i]>array[i]*dp[i-1]?array[i]:array[i]*dp[i-1]
}

console.log(Math.max(...dp).toFixed(3))