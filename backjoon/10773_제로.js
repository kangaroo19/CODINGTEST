const input = require('fs').readFileSync('example.txt').toString().split('\n');
const inputNumber=parseInt(input[0]);

const stack=[];
const answer=[];
let sum=0;


for(let i=1;i<=inputNumber;i++){
    if(input[i]!=0){
        stack.push(input[i]);
    }
    else{
        stack.pop();
    }
}


for(let i=0;i<stack.length;i++){
    sum+=parseInt(stack[i]);
}
console.log(sum);

