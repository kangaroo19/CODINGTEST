const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(v=>+v);
const n=input[0]
const dp=[4n,6n,10n]

for(let i=3;i<=n-1;i++){
    dp[i]=dp[i-1]+dp[i-2]
}

console.log(dp[n-1].toString())