const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(v=>+v));
const n=nums[0].shift()
nums.shift()


if(nums[1][1])
console.log(nums[0][1]*nums[nums.length-1][1]+nums[2][1]*nums[3][1])

console.log((nums[0][1]*nums[1][1]+nums[4][1]*nums[3][1])*n)