const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(v=>+v));
const n=nums[0][0]


const dp=[0,[nums[1][0]]]
if(n>1){
    for(let i=2;i<=n;i++){
        dp.push([])
        for(let j=0;j<nums[i].length;j++){
            if(j===0){
                dp[i].push(dp[i-1][0]+nums[i][0])
            }
            else if(j===nums[i].length-1){
                dp[i].push(dp[i-1][j-1]+nums[i][j])
            }
            else{
                dp[i].push(Math.max(dp[i-1][j-1],dp[i-1][j])+nums[i][j])
            }
        }
    }
}
console.log(Math.max(...dp[n]))

//같은 행 안에서 가장 첫번째 요소와 마지막 요소를 제외하고 중간에 있는 요소들은 겹친다
//==>중복이 생기므로 두가지 경우 중 최댓값만 저장
//0번째 행,1번째 행은 중간에 요소가없기 때문에 중복되는 거 없음
