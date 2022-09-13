const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(x => +x));
const n=Number(nums[0].shift()) //배열갯수
const m=Number(nums[0].shift()) //합
const array=nums[1].splice(0,n)
let start=0
let end=0
let count=0
while(end!==n){
    let value=0
    for(let i=start;i<=end;i++) value+=array[i]
    if(value>m) start++ //m보다 크면 start 증가
    else if(value<m) end++ //m보다 작으면 end증가
    else{ //정답이면 count,end증가
        count++
        end++
    }
}

console.log(count)
