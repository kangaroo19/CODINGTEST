const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(x => +x));
const answer = nums[1]
answer.sort((a,b)=>a-b);
if(answer.length==1){
    console.log(answer[0]*answer[0]);
}

else{
    console.log(answer[0]*answer[answer.length-1]);
}






