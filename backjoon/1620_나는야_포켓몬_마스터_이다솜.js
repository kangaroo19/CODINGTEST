const fs=require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input=fs.readFileSync(filePath).toString().trim().split('\n');
const nums = input.map(v => v.split(' '));
const n=Number(nums[0].shift())
const m=Number(nums[0].shift())
const array=[]
for(let i=1;i<n+1;i++) array.push(nums[i][0].substring(0,nums[i][0].length-1))
let map=new Map(array.map((v,i)=>[v,i+1])) //키값->포켓몬이름,값->숫자
const question=[]

for(let i=n+1;i<m+n+1;i++){
    if(Number(nums[i][0]%1)===0) question.push(Number(nums[i][0]))
    else{
        if(i===m+n){
            question.push(nums[i][0])
            break
        }
        question.push(nums[i][0].substring(0,nums[i][0].length-1))
    }
     
}

const answer=[]
for(let i=0;i<m;i++){
    if(Number(question[i])%1===0){
        answer.push(array[question[i]-1])
    }
    else
        answer.push(map.get(question[i]))
}

console.log(answer.join("\n"))





