const a='55510'
const b='5110'
console.log(b.split('').every(v=>v==='0'))
let mapA=new Map()
let mapB=new Map()

a.split('').sort((a,b)=>b-a).forEach((v,i)=>{
    if(!mapA.has(v)) mapA.set(v,1)
    else mapA.set(v,mapA.get(v)+1)
})
b.split('').sort((a,b)=>b-a).forEach((v,i)=>{
    if(!mapB.has(v)) mapB.set(v,1)
    else mapB.set(v,mapB.get(v)+1)
})
console.log(mapA)
console.log(mapB)

let mapAnswer=new Map()

for(let i of mapA){
    for(let j of mapB){
        if(i[0]===j[0]){
            mapAnswer.set(i[0],Math.min(i[1],j[1]))
            break;
        }
    }
}
console.log(mapAnswer)
let answer=[]

if(mapAnswer.size===0){
    console.log(-1)
}

else{
    mapAnswer.forEach((v,k)=>{
        for(let i=0;i<v;i++){
            answer.push(k)
        }
    })
    console.log(answer)
    if(answer.every(v=>v==='0')){
        console.log('0')
    }
    else{
        console.log((answer.join('')).toString())
    }
}
