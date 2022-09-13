const fs=require('fs');
//const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' '));
const n=Number(nums[0].shift())
nums.shift()
for(let i=0;i<n;i++){
    nums[i][1]=nums[i][1].substring(0,5) //\r때문에 substring사용
}
//nums는 2차원 배열
let map=new Map(nums) //nums배열을 map으로 생성
//value가 같으면 맨 마지막것만 남음
//'baha'란 사람이 들어갔다가(enter) 나오면(leave)
//맵에는 'baha'=>leave만 남음(세지않음)
//그러므로 'asdf'=>enter만 세고 해당 value 출력
console.log(map)
const answer=[]
map.forEach((key,value)=>{
    if(key==="enter"){
        answer.push(value)
    }
})
answer.sort().reverse()//사전순 정렬 후 역순으로 출력
console.log(answer.join("\n"))




