const genres=["pop", "pop", "pop", "rap", "rap"]
const plays=[45, 50, 40, 70, 70]
const map=new Map()

for(let i=0;i<genres.length;i++){
    if(!map.has(genres[i])) map.set(genres[i],(plays[i]))
    else map.set(genres[i],map.get(genres[i])+" "+(plays[i]))
}
const arr=[]
map.forEach((v,k)=>{
    if(v.length>=2) arr.push(v.split(" "));
    else arr.push([v]);
})

for(let i=0;i<arr.length;i++){
    let sum=0
    for(let j=0;j<arr[i].length;j++){
        arr[i][j]=Number(arr[i][j])
        sum+=arr[i][j]
    }
    arr[i].push(sum)
}

arr.sort((a,b)=>b[b.length-1]-a[a.length-1])
for(let i=0;i<arr.length;i++){
    arr[i].pop()
}
const result=[]
arr.map((v,i)=>{
    v.sort((a,b)=>b-a)
    result.push(v[0])
    if(v.length>=2) result.push(v[1])

})



const answer=[]
console.log(plays)
for(let i=0;i<result.length;i++){
    let idx=plays.indexOf(result[i])
    answer.push(idx)
    plays[idx]=null
    console.log(plays)
}

console.log(answer)