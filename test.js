const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');

// const array=[]
// for(let i=0;i<input.length;i++){
//     if(i==input.length-1) array.push(input[i])
//     else array.push(input[i].substring(0,input[i].length-1))
// }
input.sort()
const map=new Map()
let sum=0
for(let i=0;i<input.length;i++){
    if(!map.has(input[i])) map.set(input[i],1)
    else map.set(input[i],map.get(input[i])+1)
}

map.forEach((i,j)=>{
    sum+=i
})
//일부값/전체*100

let answer=""
map.forEach((value,key)=>{
    let num=value/sum*100
    map.set(key,num.toFixed(4))
})


map.forEach((value,key)=>{
    answer+=key+" "+value+"\n"
})

console.log(answer)

