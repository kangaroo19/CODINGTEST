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
//answer.sort(); 이렇게하면 배열 요소가 숫자크기순서가 아닌 유니코드 순으로 저장
answer.sort((a,b)=>a-b); //요렇게 하면 해결
console.log(answer[answer.length-1]);
