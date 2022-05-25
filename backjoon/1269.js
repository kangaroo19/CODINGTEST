const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(x => +x));

const n=Number(nums[0].shift)
const m=Number(nums[0].shift)