const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split(' ').map(v=>BigInt(v));

let fiboArr=[0]//memoization위함
let fibo_dp=(n)=>{
    if(n<=3) fiboArr[n]=1n

    if(!fiboArr[n]){//내가 저장한 값 중 없을때
        //재귀 이용해 구하고 저장
        fiboArr[n]=fibo_dp(n-1)+fibo_dp(n-3)
    }
    return fiboArr[n]
}

console.log(fibo_dp(input).toString())



