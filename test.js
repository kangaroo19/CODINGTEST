const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split(' ');
const n=input[0]
const dp=[0,[1,1,1,1,1,1,1,1,1,1]]
for(let i=2;i<=n;i++){
    dp[i]=[]
    dp[i][0]=dp[i-1][0]%10007
    for(let j=1;j<=10;j++){
        dp[i][j]=(dp[i][j-1]+dp[i][j])%10007
    }
}
console.log(dp[n].reduce((a,c)=>a+c)%10007)
// let hap=0
// for(let i=1;i<=1;i++){
//     hap+=i
// }
// console.log(55+45+36+28+21+15+10+6+3+1)