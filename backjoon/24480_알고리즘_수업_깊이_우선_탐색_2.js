const fs=require('fs');

const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const [n,m,r]=input.shift().split(' ').map(Number)
const edges=input.map(v => v.split(' ').map(Number))
const graph=new Map()



edges.forEach(([from,to])=>{
    if(graph.has(from)) graph.get(from).push(to)
    else graph.set(from,[to])
    if(graph.has(to)) graph.get(to).push(from)
    else graph.set(to,[from])
})

let count=1
const visited=new Array(n+1).fill(false)
const answer=new Array(n).fill(0)

const dfs=(start)=>{
    visited[start]=true
    answer[start-1]=count++
    if(!graph.has(start)) return
    const nodes=[...graph.get(start).sort((a,b)=>b-a)]
    for(node of nodes){
        if(!visited[node]){
            dfs(node)
        }
    }
}


dfs(r)

console.log(answer.join('\n'))