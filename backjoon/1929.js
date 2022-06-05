const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split(' ').map(v=>+v);
const n=input[0]
const m=input[1]

const isPrime=(num)=>{
    if(num===1) return false //1은 소수가 아님
    for(let i=2;i<=Math.sqrt(num);i++){
        //Math.sqrt이유
        //=>제곱근을 기준으로 대칭적으로 곱이 일어나므로
        //수행시간 줄일수 있다
        //ex)16의 약수는 1,2,4,8,16
        //16나누기 2를하던 8을 하던 똑같음
        if(num%i==0) return false
    }
    return true
}
let answer=""
for(let i=n;i<=m;i++){
    if(isPrime(i)){
        answer+=i+"\n"
    }
}

console.log(answer)
