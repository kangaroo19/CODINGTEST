const id_list=["muzi", "frodo", "apeach", "neo"]
const report=["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]
let n=2
let set=new Set(report)
const arr=Array.from(set)
const newArr=arr.map((v,i)=>v.split(" "))
const map1=new Map()
const map2=new Map()
id_list.map((v,i)=>map1.set(v,[]))
id_list.map((v,i)=>map2.set(v,0))
for(let i=0;i<newArr.length;i++){
    map1.get(newArr[i][0]).push(newArr[i][1])  
    map2.set(newArr[i][1],map2.get(newArr[i][1])+1) 
}


const answer=[]
map1.forEach((v,k)=>{
    let count=0
    for(let item of v){
        map2.forEach((v,k)=>{
            if(k===item && v>=n) count++
        })
    }
    answer.push(count)
})
console.log(answer)