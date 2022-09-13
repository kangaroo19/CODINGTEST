const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('');
const len=input.length
const stack=[]

function solution(a){
    if(!checkPossible(input)){
        return 0
    }
    for(let i=0;i<len;i++){
        let top=stack[stack.length-1]
        const cur=input[i]
        if(cur==='(' || cur==='['){
            stack.push(cur)
        }
        else if(cur===')' || cur===']'){
            const reverse=(cur===')')?'(':'['
            const point=(reverse==='(')?2:3
    
            if(top===reverse){
                stack.pop()
                stack.push(point)
            }
            else{
                let temp=0
                while(1){
                    const pop=stack.pop()
                    if(typeof pop==='number'){
                        temp+=pop
                    }
                    else if(pop===reverse){
                        stack.push(temp*point)
                        break
                    }
                }
            }
        }
    }
    return stack.reduce((acc,cur)=>acc+cur)     
}

function checkPossible(string){
    const stack=[]
    for(let i=0;i<string.length;i++){
        let top=stack[stack.length-1]
        const cur=string[i]
        if(cur===']' && top==='['){
            stack.pop()
        }
        else if(cur===')' && top==='('){
            stack.pop()
        }
        else{
            stack.push(cur)
        }
    }
    return stack.length?false:true
}
const answer=solution(input)
console.log(answer)