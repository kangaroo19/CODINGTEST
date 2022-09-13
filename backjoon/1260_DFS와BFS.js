const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
const [N, M, V] = input.shift().split(' ').map(Number);
const edges = input.map(v => v.split(' ').map(Number));
const graph = [...Array(N + 1)].map(() => []);
edges.forEach(([from, to]) => {
    graph[from].push(to);
    graph[to].push(from);
  });


const dfs=(start)=>{
    const stack=[start]
    const visited=Array(N+1).fill(false) //true or false 저장되는 배열
    const order=[] //순서 저장하는 배열
    while(stack.length){ //stack에 내용없으면 빠져나옴
        const node=stack.pop()
        if(!visited[node]){
            visited[node]=true
            order.push(node)
            stack.push(...graph[node])
        }
    }
    return order.join(" ")
}

const bfs=(start)=>{
    const queue=[start]
    const visited=Array(N+1).fill(false)
    const order=[]
    while(queue.length){
        const node=queue.shift()
        if(!visited[node]){
            visited[node]=true
            order.push(node)
            queue.push(...graph[node])
        }
    }
    return order.join(" ")
}

graph.forEach(v=>v.sort((a,b)=>b-a))
console.log(dfs(V))
graph.forEach(v=>v.sort((a,b)=>a-b))
console.log(bfs(V))

//dfs는 stack이용하기 때문에 stack의 뒤에서 부터 탐색한다는 것을 이용하여
//graph의 모든 인접 노드들을 내림차순 정렬

//반대로 bfs는 queue를 사용하기때문에 앞에서부터 탐색하므로
//인접 노드들은 오름차순으로 정렬