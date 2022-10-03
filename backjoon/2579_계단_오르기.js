const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n').map(v=>+v);
const n=input[0]

const array=input

const dp=[0,0] //최댓값 저장하는 배열

dp[1]=array[1]
dp[2]=dp[1]+array[2]
dp[3]=Math.max(array[1]+array[3],array[2]+array[3])

for(let i=4;i<=n;i++){
    dp[i]=Math.max(dp[i-3]+array[i-1]+array[i],dp[i-2]+array[i])
}

console.log(dp[n])

//3번째 계단까지 있을때의 경우의 수
//1,3번째 계단밟을때
//2,3번째 계단 밟을때 두가지이므로 이중 최댓값


//그 이후(4번째 계단부터)
//n번째 계단 직전에 n-1번째 계단 밟았을 때
//--> dp[n-3]+stairs[n-1]+stairs[n]

//n번째 계단 직전에 n-1번째 계단을 밟았을 경우
//--> dp[n-2]+stairs[n]