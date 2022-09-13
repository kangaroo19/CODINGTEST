const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' '));
const n=Number(nums[0].shift())
const m=Number(nums[0].shift())
const array1=[]
const array2=[]
for(let i=1;i<n+1;i++) array1.push(nums[i][0])
for(let i=n+1;i<n+m+1;i++) array2.push(nums[i][0])

let set1=new Set(array1)
let set2=new Set(array2)

function a(set1,set2){ //교집합 구하는 함수
    let interSection=new Set()
    set1.forEach(e=>{
        if(set2.has(e)) interSection.add(e)
    })
    return interSection
}

let answer=a(set1,set2)
let answer1=[]

answer.forEach((e=>{ //처음에는 for문으로 answer1에 푸시했는데 안됨
    answer1.push(e)
}))
console.log(answer1.length)
console.log((answer1.sort()).join("\n"))

//집합관련 문제 풀이할떄는 for문이 아닌 forEach로 할것


