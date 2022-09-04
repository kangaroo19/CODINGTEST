const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' '));
const n=Number(nums[0][0])

const answer=[]

for(let i=n;i>=1;i--){
    const lStack=[]
    const rStack=[]
    let VPS=nums[i].pop().trim().split("")
    let len=VPS.length
    if(len%2===1){
        answer.push('NO')
        continue
    }
    for(let i=len-1;i>=0;i--){
        if(VPS[i]===')') lStack.push(VPS.pop())
        else rStack.push(VPS.pop())

        if(lStack[0]===')' && rStack[0]==='('){
            lStack.pop()
            rStack.pop()
        }
        else if(rStack[0]==='(' && lStack[0]===undefined){
            break;
        }
    }
    if(!rStack.length && !lStack.length) answer.push('YES')
    else answer.push('NO')
}

console.log(answer.reverse().join("\n"))