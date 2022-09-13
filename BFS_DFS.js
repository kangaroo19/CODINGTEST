//bfs는 두개의 큐를 사용
//dfs는 스택,큐 사용

const graph1={
    A:['B','C'],
    B:['A','D'],
    C:['A','G','H','I'],
    D:['B','E','F'],
    E:['D'],
    F:['D'],
    G:['C'],
    H:['C'],
    I:['C','J'],
    J:['I']
}
const bfs=(graph,startNode)=>{
    let i=0
    let visited=[] //탐색을 마친 노드들
    let needVisit=[] //탐색해야할 노드들
    needVisit.push(startNode)
    while(needVisit.length!==0){ //탐색해야할 노드가 없을 때 까지
        const node=needVisit.shift()//queue이기 때문에 선입선출
        if(!visited.includes(node)){//해당 노드 탐색된 적 없다면
            visited.push(node)
            needVisit=[...needVisit,...graph[node]]
        }
        // console.log(i+" "+needVisit)
        // console.log(visited)
        i++
    }
    return visited;
}

// bfs(graph,"A")

const graph2 = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A", "G", "H", "I"],
    D: ["B", "E", "F"],
    E: ["D"],
    F: ["D"],
    G: ["C"],
    H: ["C"],
    I: ["C", "J"],
    J: ["I"],
  };

const dfs=(graph,startNode)=>{
    let needVisitStack=[] //탐색을 해야 할 노드들
    let visitedQueue=[] //탐색을 마친 노드들

    needVisitStack.push(startNode)

    while(needVisitStack.length!==0){
        const node=needVisitStack.pop()
        if(!visitedQueue.includes(node)){
            visitedQueue.push(node)
            needVisitStack=[...needVisitStack,...graph[node]]
        }
        console.log("visited="+visitedQueue)
        console.log("needVisit="+needVisitStack)
    }
    return visitedQueue
}

dfs(graph2,'A')