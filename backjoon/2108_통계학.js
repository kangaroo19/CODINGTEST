const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n').map(v=>+v);
const n=input.shift()
let sum=0
input.sort((a,b)=>a-b)
input.forEach(i=>{
    sum+=i
})


function getMode(array){
    const map=new Map()
    for(let i=0;i<n;i++){
        if(!map.has(array[i])) map.set(array[i],1)
        else map.set(array[i],map.get(array[i])+1)
    }
    let max=0
    let answer=[]
    map.forEach((element,key)=>{
        if(max<element){
            max=element
            answer=[]
            answer.push(key)
        }
        else if(max==map.get(key)) answer.push(key)
    })
    return answer.length!==1?answer[1]:answer[0]
}

let answer=""
answer+=Math.round(sum/n)+"\n"
answer+=input[Math.floor(input.length/2)]+"\n"
answer+=getMode(input)+"\n"
answer+=input[input.length-1]-input[0]

console.log(answer)