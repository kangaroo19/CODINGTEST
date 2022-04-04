let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

const inputNumber=parseInt(input[0]);

let stack=[];



for(let i=1;i<=inputNumber;i++){
        if(input[i].charAt(3)=='h'){
            stack.push(input[i].charAt(5));
        }
        if(input[i].substring(0,3)=="pop"){
            stack.pop();
            
        }
}

console.log(stack);
