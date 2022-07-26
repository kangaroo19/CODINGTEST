//자바스크립트에서는 queue 내장함수는 없지만 배열을 사용하여
//큐의 기능 흉내낼수 있다 (shift()라는 메서드 있기때문)
//그러나 shift()를 사용하면 원소를 앞에서 부터 하나씩
//제거할때 나머지 원소에 대한 재정렬이 이루어 져야 하기 때문에
//원래 큐 자료구조의 시간복잡도와 상당한 차이가 발생
//큐 시간복잡도 O(1)

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
            temp.this.storage[this.front]
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
q.add(1)
q.add(2)
q.add(3)
q.add(4)

console.log(q)

console.log(q.popleft())