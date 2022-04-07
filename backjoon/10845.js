const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
const inputNumber=parseInt(input[0]);
const que=[];
const answer=[];
for(let i=1;i<=inputNumber;i++){
    if(input[i].substring(0,3)=='pop'){
        (que.length!=0)?answer.push(que.splice(0,1)):answer.push(-1);
    }
    else if(input[i].substring(0,4)=='size'){
        answer.push(que.length);
    }
    else if(input[i].substring(0,5)=='empty'){
        (que.length==0)?answer.push(1):answer.push(0);
    }
    else if(input[i].substring(0,5)=='front'){
        (que.length==0)?answer.push(-1):answer.push(que[0]);
    }
    else if(input[i].substring(0,4)=='back'){
        (que.length==0) ? answer.push(-1):answer.push(que[que.length-1]);
    }
    else{
        que.push(input[i].substring(5,input[i].length));
    }
}

console.log(answer.join("\n"));
