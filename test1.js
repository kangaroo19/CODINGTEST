const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

for(let i in input){
    let temp=input[i].trim().split("")
    let stack=[]
    let count=0

    if(temp[0]==='-') break;

    for(let j in temp){
        if(temp[j]==='{') stack.push(temp[j])
        else{
            if(!stack.length){
                stack.push('{')
                count++
            }
            else{
                stack.pop()
            }
        }
    }
    console.log((Number(i)+1)+'. '+(cnt+stack.length/2))
}