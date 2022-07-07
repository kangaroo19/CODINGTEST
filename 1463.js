const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split(' ').map(v=>+v);
const n=input.shift()

const dp=[]
dp[1]=0
dp[2]=1
dp[3]=1

for(let i=4;i<=n;i++){
    dp[i]=dp[i-1]+1 
    if(i%2==0){//인덱스는 숫자 인덱스에 해당하는 값은 경우의 수
        dp[i]=Math.min(dp[i],dp[i/2]+1)//+1의 이유는 2로 1회 나누었기 때문
    }
    if(i%3==0){
        dp[i]=Math.min(dp[i],dp[i/3]+1)
    }
}

console.log(dp[n])
//4의 경우의 수는 3의 경우의 수 + 4에서 1 뺀값