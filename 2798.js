const input = require('fs').readFileSync('example.txt').toString().trim().split(/\s+/);

const n=parseInt(input[0]); 
const m=parseInt(input[1]); 
const array=input.splice(2,input.length-1); 
let answer=[];
for(let i=0;i<array.length-2;i++){
    for(let j=i+1;j<array.length-1;j++){
        for(let k=j+1;k<array.length;k++){
            if(m<parseInt(array[i])+parseInt(array[j])+parseInt(array[k])){
                continue;
            }else{
            answer.push(parseInt(array[i])+parseInt(array[j])+parseInt(array[k]));
            }    
        }
    }
}

answer.sort();
answer.sort((a,b)=>a-b);
console.log(answer[answer.length-1]);
