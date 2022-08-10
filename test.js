const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split(' ').map(v=>+v);
let n=input[0]-2
let k=input[1]

const dp=[1]
let j=n-1
for(let i=1;i<k;i++){
    dp[i]=dp[i-1]+j
    j++
}


console.log(dp)

