const fs=require('fs');

const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const [n,m,r]=input.shift().split(' ').map(Number)
const edges=input.map(v => v.split(' ').map(Number))
const graph=[...Array(n+1)].map(()=>[])

class Queue{
    constructor(){
        this.storage={}
        this.front=0
        this.rear=0
    }
    size(){ 
        if(this.storage[this.rear]===undefined){ //rear가 가리키는 값이 없을때가 아무 데이터가 없는 경우
            return 0
        }
        else{
            return this.rear-this.front+1
        }
    }
    add(value){
        if(this.size()===0){
            //['0']인 이유는 객체 object는 키 값으로 오직
            //문자열과 symbol만 허용하기 때문
            this.storage['0']=value
        }
        else{
            this.rear+=1;
            this.storage[this.rear]=value
        }
    }
    popleft(){
        let temp//첫 원소 값 임시로 담을 변수
        if(this.front==this.rear){ //storage에 하나만 남았을 때
            temp=this.storage[this.front]
            delete this.storage[this.front]//delete연산자는 객체의 해당값 지움
            this.front=0
            this.rear=0
            //위의 0으로 초기화 하는 부분이 없다면 
            //front는 rear보다 1 더 큰 역설에 빠지게 됨
        }
        else{
            temp=this.storage[this.front]
            delete this.storage[this.front]
            this.front+=1
        }
        return temp
    }
}

edges.forEach(([from, to]) => {
    graph[from].push(to);
    graph[to].push(from);
  });
const visited=Array(n+1).fill(false) //true or false 저장되는 배열
const order=Array(n).fill(0) //순서 저장하는 배열
let count=1

const bfs=(start)=>{
    const queue=new Queue()
    queue.add(start)
    while(queue.size()>0){ 
        const node=queue.popleft()
        if(!visited[node]){
            visited[node]=true
            order[node-1]=count++
            queue.add(...graph[node])
            for(let i=0;i<graph[node].length;i++){
                queue.add(graph[node][i])
            }
        }
    }
    return order
}

graph.forEach(v=>v.sort((a,b)=>a-b))
let answer=bfs(r)
console.log(answer.join("\n"))

//큐를 클래스로 구현하지 않고 단순히 shift,push만 
//사용했을때는 시간초과가 나왔음
//해결위해 큐를 클래스로 직접 구현