const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n').map(v=>+v);
const t=input.shift()

const maxNum=Math.max(...input)
const dp=[[0,0,0],[1,0,0],[0,1,0],[1,1,1]] //1,2,3순서
for(let i=4;i<=maxNum;i++){
    dp[i]=[(dp[i-1][1]+dp[i-1][2])%1000000009,(dp[i-2][0]+dp[i-2][2])%1000000009,(dp[i-3][0]+dp[i-3][1])%1000000009]
}

for(let i=0;i<input.length;i++){
    console.log(dp[input[i]].reduce((a,c)=>a+c)%1000000009)
}

//n-3 => 마지막 숫자 1,2일때 카운트
//n-2 => 마지막 숫자 1,3일때 카운트
//n-1 => 마지막 숫자 2,3일때 카운트


//ex)4 경우의 수 를 구할때
//1 의 경우의 수 => 1
//2 의 경우의 수 => 2
//3 의 경우의 수 => (1,2),(2,1),(3)

// 1 + 3이 4이므로 마지막 수가 1,2일때를 카운트한다 (마지막 수가 3이면 연속되므로 제외) 
// 2 + 2가 4이므로 마지막 수가 1,3일때를 카운트
// 3 + 1이 4이므로 마지막 수가 2,3일때를 카운트