let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v=>+v);
const n=Number(input[0])
const m=Number(input[1])
const array=[]
//소수이면 array에 1과 자기자신밖에 없으니까 array길이 판별해서 소수면 num반환 아니면 0 반환
function f(num){
    array.splice(0,array.length)//array배열 초기화
    for(let i=1;i<=num;i++){
        if(num%i==0){ 
            array.push(i)//f(13)=>array=[1,num] f(6)=>[1,2,3,6]
        }
    }
    if(array.length==2) return num //array 길이 2라는 것은 소수라는 뜻
    else return 0 //길이가 2가 아니면 0반환
}

let result=0
let a=10000000
for(let i=n;i<=m;i++){
    result+=f(i)
    if(result<a&&result!=0) a=result
}//a는 최소값
//result는 누적합
//result가 0이면 (n과 m 사이에 소수가 하나도 없을때) answer에 -1푸시
const answer=[]
if(result==0) answer.push(-1)
else{
    answer.push(result)
    answer.push(a)
}

console.log(answer.join("\n"))