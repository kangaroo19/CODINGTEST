const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(v=>+v));
const n=nums.shift()[0]
console.log(nums,n)
function solution(n,nums){
    for(let i=n-2;i>=0;i--){
        for(let j=0;j<nums[i].length;j++){
            nums[i][j]+=Math.max(nums[i+1][j],nums[i+1][j+1])
        }
    }
    console.log(nums)
}

solution(n,nums)
