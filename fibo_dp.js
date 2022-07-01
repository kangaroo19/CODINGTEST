let fiboArr=[0]//memoization위함
let fibo_dp=(n)=>{
    if(n<3) fiboArr[n]=1

    if(!fiboArr[n]){//내가 저장한 값 중 없을때
        //재귀 이용해 구하고 저장
        fiboArr[n]=fibo_dp(n-1)+fibo_dp(n-2)
    }
    return fiboArr[n]
}

console.log(fibo_dp(5))
//dp의 핵심은 미리 계산해두었다가 필요할때 불러 쓰기 