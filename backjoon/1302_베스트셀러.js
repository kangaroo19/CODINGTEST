const fs=require('fs');
const input=fs.readFileSync("/dev/stdin").toString().trim().split('\n')
const n=+input.shift()

function getMode(array){
    let map=new Map()
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
        if(max===map.get(key)) answer.push(key)
    })
    answer.sort()
    return answer[0]
}

console.log(getMode(input))