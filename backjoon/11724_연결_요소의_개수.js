const fs=require('fs');

const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const [n,m]=input.shift().split(' ').map(Number)
const edges=input.map(v => v.split(' ').map(Number))
const graph=[...Array(n+1)].map(()=>[])

edges.forEach(([from, to]) => {
    graph[from].push(to);
    graph[to].push(from);
});


const order=[]
const dfs=(start)=>{
    const stack=[start]
    const visited=Array(n+1).fill(false)  
    
    while(stack.length){
        const node=stack.pop()
        if(!visited[node]){
            visited[node]=true
            order.push(node)
            arr[node-1]=node
            stack.push(...graph[node])
        }
    }
    return order.join(" ")
}
const arr=Array(n).fill(0)
let count=0
graph.forEach(v=>v.sort((a,b)=>b-a))

for(let i=1;i<=n;i++){
    if(arr[i-1]===0){ //arr안의 해당 값이 0이면 dfs함수 실행하고 count 1증가
        dfs(i)
        count++
    }
    else{ //arr의 해당값이 0이 아니라는 것은 이미 탐색한 정점이라는 뜻이므로 continue
        continue
    }
}
console.log(count)