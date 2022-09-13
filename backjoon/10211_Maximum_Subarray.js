const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(x => +x));
const t=nums[0].shift()
nums.shift()

for(let i=0;i<t;i++){
    let n=nums[0].shift()
    nums.shift()
    let array=nums.shift()
    let dp=[array[0]]
    for(let i=1;i<n;i++){
        dp[i]=array[i]>array[i]+dp[i-1]?array[i]:array[i]+dp[i-1]
    }
    console.log(Math.max(...dp))
}