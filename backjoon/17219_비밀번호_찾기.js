const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' '));

const n=+nums[0].shift()
const m=+nums[0].shift()

const array=[]
const question=[]

for(let i=1;i<=n;i++) array.push([nums[i][0],nums[i][1]])
// for(let i=n+1;i<=m+n;i++){
//     if(i==m+n){
//         question.push(nums[i][0])
//         break
//     }
//     question.push(nums[i][0].substring(0,nums[i][0].length-1))
// }
//vscode에서는 위처럼 하되 백준 채점 시 에는 밑에처럼 할것
//->vscode에서는 문자열 끝에 \r붙는거 고려 백준은 안해도됨
for(let i=n+1;i<=m+n;i++) question.push(nums[i][0])
let map=new Map(array)
let answer=""


for(let i=0;i<m+1;i++){
    if(map.has(question[i])) answer+=map.get(question[i])+"\n"
}

console.log(answer)

// for(let i=0;i<m+1;i++){
//     map.forEach((element,key)=>{
//         if(key===question[i]) answer+=element+"\n"
//     })
// }
//처음에는 이렇게 중첩 for문을 사용했는데 시간초과
//has를 쓰면 for문 사용하면서 34행처럼 일일이 비교할 필요없이
//자체적으로 순회를 하는듯?