const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' '));
const word=nums[0][0].trim()
const n=Number(nums[1])
let lStack=word.split("")
let rStack=[]



for(let i=2;i<n+2;i++){
    let [cmd,value]=input[i].trim().split(" ")
    if(cmd==='L' && lStack.length) rStack.push(lStack.pop())
    else if(cmd==='D') lStack.push(rStack.pop())
    else if(cmd==='B') lStack.pop()
    else if(cmd==='P') lStack.push(value)
}

let answer = lStack.join("");
answer += rStack.reverse().join("");
console.log(answer);