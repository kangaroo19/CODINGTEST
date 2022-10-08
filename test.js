const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split(' ');
const n=input[0]
const dp=[0,[1,1,1,1,1,1,1,1,1,1]]
for(let i=2;i<=n;i++){
    dp[i]=[]
    dp[i][0]=dp[i-1][0]%10007
    for(let j=1;j<10;j++){ //0번째 인덱스는 어차피 1개(ex)0000) 이므로 1번 인덱스부터 시작
        dp[i][j]=(dp[i][j-1]+dp[i-1][j])%10007
    }
}

console.log(dp[n].reduce((a,c)=>a+c)%10007)

//0으로 끝나는 수,1로 끝나는 수 .....9로 끝나는 수