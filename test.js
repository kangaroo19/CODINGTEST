const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('');
const len=input.length
const stack=[]
let answer=0
for(let i=0;i<len;i++){
    if(input[i]==='(' || input[i]==='['){
        stack.push(input[i])
        if(typeof stack[stack.length-2]==='number'){
            answer+=stack[stack.length-2]
        }
    }
    else if(input[i]===')'){
        if(typeof stack[stack.length-1]==='number'){
            let temp=stack[stack.length-1]*2
            answer+=temp
            stack.push(answer)
        }
        
    }
    else{
        if(typeof stack[stack.length-1]==='number'){
            let temp=stack[stack.length-1]*3
            answer+=temp
            stack.push(answer)
        }
        
        
    }
}
console.log(stack)
console.log(answer)