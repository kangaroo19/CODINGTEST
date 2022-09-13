const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split(' ').map(v=>+v);
const n=input[0]

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
    newAdd(){
        this.add(this.storage[this.front])
        this.popleft()
    }
    popleft(){
        let temp//첫 원소 값 임시로 담을 변수
        if(this.front==this.rear){ //storage에 하나만 남았을 때
            this.storage[this.front]
            delete this.storage[this.front]
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
let q=new Queue()
for(let i=1;i<=n;i++){
    q.add(i)
}

while(q.size()!==1){
    q.popleft()
    q.newAdd()
}
console.log(Object.values(q.storage).join(""))