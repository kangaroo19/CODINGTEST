const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(v=>+v));
const n=nums[0][0]
const k=nums[1][0]
nums.shift()
nums.shift()
const graph=[...Array(n+1)].map(() => [])

nums.forEach(([from,to])=>{
    graph[from].push(to)
    graph[to].push(from)
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
    return order.length-1
}
graph.forEach(v=>v.sort((a,b)=>a-b))
console.log(bfs(1))

//bfs방식으로 풀어야됨