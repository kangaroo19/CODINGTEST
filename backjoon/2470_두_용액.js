const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(x => +x));
const n=+nums[0].shift()
const array=[]
for(let i=0;i<n;i++) array.push(nums[1][i])

array.sort((a,b)=>a-b)
let start=0
let end=n-1
const answer=[]
while(start!==end){
    let value=array[start]+array[end] //두 용액 합한 값
    if(value<0){ 
        answer.push([array[start],array[end],Math.abs(value)])
        start++
    }
    else if(value>0){
        answer.push([array[start],array[end],Math.abs(value)])
        end--
    }
    else{
        answer.push([array[start],array[end],Math.abs(value)])
        start++
    }

}
//answer 배열에 [array[start],array[end],앞에 두개 더한값의 절댓값]
//순으로 push


// for(let i=0;i<answer.length;i++){
//     let temp=0;
//     temp=answer[i][2]
//     answer[i][2]=answer[i][0]
//     answer[i][0]=temp
// }

answer.sort((a,b)=>a[2]-b[2])
//[][2]인덱스에 더한 값 있으므로 a[2]-b[2]오름차순
//오름차순 정렬했으므로 당연히 첫번째 인덱스가 정답
//->0과 제일 가까운 수


//원래는 잘 몰라서 위의 for문에서
//첫번째랑 마지막 요소 위치 바꾼 후
//[][0]기준으로 오름차순햇음
console.log(answer[0][0],answer[0][1])

