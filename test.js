const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
for(let i=0;i<input.length-1;i++){
    const word=input[i].trim().split("")
    if(checkPossible(word)){
        console.log(i+1+'. '+0)
    }
    else{
        let count=0
        let len=word.length
        const lstack=[]
        const rstack=[]
        for(let i=0;i<len/2;i++){
            lstack.push(word[i])
        }
        for(let i=word.length-1;i>=len/2;i--){
            rstack.push(word[i])
        }
        let str=lstack.join("")+[...rstack].reverse().join("")
        let j=0
        while(1){
            if(lstack[j]==='}' && rstack[j]==='{'){
                let str2=checkMiddle(lstack,rstack,j+1)
                if(checkPossible(str2)){
                    j++
                    continue
                }
                count+=2
                lstack[j]='{'
                rstack[j]='}'
                str=lstack.join("")+[...rstack].reverse().join("")
            }
            else if(lstack[j]==='}' && rstack[j]==='}'){
                let str2=checkMiddle(lstack,rstack,j+1)
                if(checkPossible(str2)===true){
                    j++
                    continue
                }
                count+=1
                lstack[j]='{'
                str=lstack.join("")+[...rstack].reverse().join("")
            }
            else if(lstack[j]==='{' && rstack[j]==='{'){
                let str2=checkMiddle(lstack,rstack,j+1)
                if(checkPossible(str2)===true){
                    j++
                    continue
                }
                count+=1
                rstack[j]='}'
                str=lstack.join("")+[...rstack].reverse().join("")
            }
            j++
            if(checkPossible(str)) break;
        }
        console.log(i+1+'. '+count)      
    }
}




function checkPossible(string){
    const stack=[]
    for(let i=0;i<string.length;i++){
        let top=stack[stack.length-1]
        const cur=string[i]
        if(cur==='}' && top==='{'){
            stack.pop()
        }
        
        else{
            stack.push(cur)
        }
    }
    return stack.length?false:true
}

function checkMiddle(lstack,rstack,j){
    let a=[]
    let b=[]
    lstack.filter((number,index,src)=>{
        if(index<j){
            a.push(number)
        }
    })
    rstack.filter((number,index,src)=>{
        if(index<j){
            b.push(number)
        }
    })
    let test=a.join("")+[...b].reverse().join("")
    return test
}