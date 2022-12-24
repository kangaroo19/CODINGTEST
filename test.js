const N=4
const stages=[4,4,4,4,4]
const map=new Map()
const arr=[]
let len=stages.length
for(let i=1;i<=N;i++) map.set(i,0)
for(let i=0;i<stages.length;i++) if(map.has(stages[i])) map.set(stages[i],map.get(stages[i])+1)
for(let i=1;i<=N;i++){
    arr.push([])
    arr[i-1].push(i)
    arr[i-1].push(map.get(i)/len)
    len=len-map.get(i)
}


arr.sort((a,b)=>{
    if(a[1]===b[1]) return a[0]-b[0]
    else return b[1]-a[1]
})
const answer=[]
arr.forEach((v,_)=>{
    answer.push(v[0])
})

console.log(answer)