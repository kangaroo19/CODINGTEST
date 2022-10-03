const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n').map(v=>+v);
const t=input.shift()

let dp=[1,2,4]
let answer=""

let maxNum=Math.max(...input)
for(let i=3;i<=maxNum;i++){
    dp[i]=(dp[i-1]+dp[i-2]+dp[i-3])%1000000009
}

for(let i=0;i<input.length;i++){
    let n=input[i]
    console.log(dp[n-1])
}

//처음에는 이중for문으로 풀었으나 시간초과
//그래서 input배열안에서 가장큰값을 꺼내 값을 구하면
//dp배열안에는 가장 큰값 까지의 값이 채워지게 되므로
//굳이 이중for문을 사용하지 않아도 됨