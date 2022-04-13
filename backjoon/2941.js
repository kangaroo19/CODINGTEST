const input = require('fs').readFileSync('example.txt').toString().trim().split('');
const str=input.join("");

const answer=[];

for(let i=0;i<str.length;i++){
    if(str.substring(i,i+2)=="c="){
        answer.push('c=');
        i++;
    }
    else if(str.substring(i,i+2)==="c-"){
        answer.push('c-');
        i++;
    }
    else if(str.substring(i,i+3)==="dz="){
        answer.push('dz=');
        i++;
        i++;
    }
    else if(str.substring(i,i+2)==="d-"){
        answer.push('d-');
        i++;
    }
    else if((str.substring(i,i+2))==="lj"){
        answer.push('lj');
        i++;
    }
    else if(str.substring(i,i+2)==="nj"){
        answer.push('nj');
        i++;
    }
    else if(str.substring(i,i+2)==="s="){
        answer.push('s=');
        i++;
    }
    else if(str.substring(i,i+2)==="z="){
        answer.push("z=");
        i++;
    }
    else{
        answer.push(str[i]);
    }
}
console.log(answer);
console.log(answer.length);

//제대로했는데 위 input에 trim이 없어서 계속 실패했음 
//input변수에서 입력값을 가져올 때 trim()은 무조건 사용할것