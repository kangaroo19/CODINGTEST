const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(v=>+v));
const n=nums.shift().pop()

const dp=new Array(n).fill(0)
for(let i=0;i<n;i++){
    const [duration,profit]=nums[i]
    if(i+duration>n) continue
    dp[i]+=profit
    //console.log(dp)
    for(let j=i+duration;j<n;j++){
        //console.log(dp[j],dp[i])
        dp[j]=Math.max(dp[j],dp[i])
    }
}
console.log(Math.max(...dp))
