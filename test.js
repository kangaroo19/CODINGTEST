const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('');
const len=input.length
const lStack=[]
const rStack=[]
let array=[]
if(len%2===1){
    console.log(0)
}
else{
    for(let i=len-1;i>=0;i--){
        if((input[i]===')' || input[i]===']')){
            
            rStack.push(input.pop())
        }
        else{
            lStack.push(input.pop())
            if(lStack[lStack.length-1]==='[' && rStack[rStack.length-1]===']'){
                array.push(3)
                lStack.pop()
                rStack.pop()
            }
            else if(lStack[lStack.length-1]==='(' && rStack[rStack.length-1]===')'){
                array.push(2)
                lStack.pop()
                rStack.pop()
            }
        }
    }
}

console.log(array)