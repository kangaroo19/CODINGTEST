const fs=require('fs');

const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const [n,m,r]=input.shift().split(' ').map(Number)
const edges=input.map(v => v.split(' ').map(Number))
const graph=[...Array(n+1)].map(()=>[])



edges.forEach(([from, to]) => {
    graph[from].push(to);
    graph[to].push(from);
  });
const visited=Array(n+1).fill(false) //true or false 저장되는 배열

const dfs=(start)=>{
    const stack=[start]
    const order=[] //순서 저장하는 배열
    while(stack.length){ //stack에 내용없으면 빠져나옴
        const node=stack.pop()
        if(!visited[node]){
            visited[node]=true
            order.push(node)
            stack.push(...graph[node])
        }
    }
    return order
}
graph.forEach(v=>v.sort((a,b)=>b-a))
console.log(graph)
let answer=dfs(r)



const len=visited.length
for(let i=0;i<len;i++){
    if(!visited[i]){
        answer.splice(i,0,0)
    }
}
answer.shift()
console.log(answer.join("\n"))