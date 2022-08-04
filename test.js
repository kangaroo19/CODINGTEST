const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(v=>+v));

const n=nums[0][0]
const array=nums[1]
const dp=[nums[1][0]]

for(let i=1;i<n;i++){
    dp[i]=array[i]>array[i]+dp[i-1]?array[i]:array[i]+dp[i-1]
}
//지금까지 더한 것보다 현재값(array안의 값)이 크면 현재값 dp에 넣음
//아니라면 그대로 계속 더함
console.log(Math.max(...dp))