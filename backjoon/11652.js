const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const n=+input.shift()
const array=input.map(v=>+v)

let map=new Map()
for(let i of array){
    const now=(map.get(curr)||0)+1
    const max=(map.get(m)||0)
    map.set(i,now)
}