const fs=require('fs');
const input=fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(x => +x));
const N=nums[0][0];
const M=nums[1];



const a=2;
let count=0;
const answer=[];

for(let i=0;i<M.length;i++){
    for(let j=0;j<=M[i];j++){
        if(M[i]%j==0){
            answer.push(j);
        }
    }
    if(answer.length==2){
        count++;
    }
    answer.splice(0,answer.length+1);
}

console.log(count);