const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.trim().split(' '));
const n=Number(nums.shift())

nums.sort((a,b)=>{
    if(a[3]===b[3]) return a[2]-b[2] //태어난 년도가 같으면 월을 기준으로 정렬
    else return a[3]-b[3] //평소에는 태어난 년도를 기준으로 정렬
})

console.log(nums[nums.length-1][0])
console.log(nums[0][0])
