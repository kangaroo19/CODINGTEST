const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split("\n").map(v=>v.trim()); 
const array = input.map(v=>v.split(' ').map(x=>+x))
const n=+array[0].shift()
const m=+array[0].shift()
array.shift()

const array1=[]
const array2=[]
for(let i=0;i<n;i++) array1.push(array[0][i])
for(let i=0;i<m;i++) array2.push(array[1][i])
array1.sort((a,b)=>a-b) 
array2.sort((a,b)=>a-b)

let setA=new Set(array1)
let setB=new Set(array2)

function a(setA,setB){ //차집합 리턴하는 함수
    setB.forEach(e=>{
        if(setA.has(e)) setA.delete(e)
    })
    return setA
}

const set=a(setA,setB)
let answer=""


if(set.size===0) answer=0
else{
    answer=set.size+"\n"
    set.forEach(e=>{
        answer+=e+" "
    })
}

console.log(answer)