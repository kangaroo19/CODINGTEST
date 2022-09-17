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
const order=Array(n).fill(0) //순서 저장하는 배열

let count=1

const dfs=(start)=>{
    const stack=[start]
    
    while(stack.length){ //stack에 내용없으면 빠져나옴
        const node=stack.pop()
        if(!visited[node]){
            visited[node]=true
            order[node-1]=count++
            stack.push(...graph[node])
        }
    }
    return order
}
graph.forEach(v=>v.sort((a,b)=>b-a))


let answer=dfs(r)



console.log(answer.join("\n"))

//기존방식은
//6 4 1
//2 3
//1 4
//1 5
//4 6

//이 테스트 케이스를 통과못했음
//1 0 0 4 6 5가 될것같지만
//1 0 0 2 4 3이 정답
//출력 결과는 정점 번호가 아님
//위 테스트 케이스는 2,3번 정점을 들어가지 않으므로 2,3번 자리에 0이 들어감
