const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const [n,m,r]=input.shift().split(' ').map(Number)
const edges=input.map(v => v.split(' ').map(Number))
const graph=[...Array(n+1)].map(()=>[])

edges.forEach(([from,to])=>{
    graph[from].push(to)
    graph[to].push(from)
    graph[from].sort((a,b)=>a-b)
})


const bfs=(start)=>{
    const queue=[start]
    const visited=Array(n+1).fill(false)
    const order=[]
    while(queue.length){
        const node=queue.shift()
        if(!visited[node]){
            visited[node]=true
            order.push(node)
            queue.push(...graph[node])
        }
    }
    const len=order.length
    if(len!==n){
        for(let i=0;i<n-len;i++){
            order.push(0)
        }
    }
    return order.join("\n")
}

console.log(bfs(r))