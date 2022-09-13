const input = require('fs').readFileSync('example.txt').toString().split('\n');
const inputNumber=parseInt(input[0]);
const stack=[];
const answer=[];

for(let i=1;i<=inputNumber;i++){
    if(input[i].substring(0,3)=="pop"){
        (stack.length==0) ? answer.push(-1) : answer.push(stack.pop()); 
    }
    else if(input[i].substring(0,4)=="size"){
        answer.push(stack.length);
    }
    else if(input[i].substring(0,5)=="empty"){
        (stack.length==0) ? answer.push(1) : answer.push(0);
    }
    else if(input[i].substring(0,3)=="top"){
        (stack.length==0) ? answer.push(-1) : answer.push(stack[stack.length-1]);
    }
    else{
        stack.push(input[i].substring(5,input.length));
    }
}

console.log(answer.join("\n"));

//switch문 사용하려 했으나 input내용 출력해보면 요소 끝에 \r 이 붙어 if문 사용
//처음에는 console.log로 일일이 출력했는데 이렇게 하니까 시간초과나와서 또 다른 배열(answer)를 
//만들어 answer배열에다 푸시하고 맨 마지막(24행)에 answer배열모든 요소 출력
//answer.push를 출력이라고 생각하면 쉬움
