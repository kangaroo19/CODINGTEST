class Queue{
    constructor(){
        this.storage={}
        this.front=0
        this.rear=0
    }
    size(){
        if(this.storage[this.rear]===undefined){
            return 0
        }
        else{
            return this.rear-this.front+1
        }
    }
    add_back(value){
        if(this.size()===0){
            this.storage['0']=value
        }
        else{
            this.rear+=1
            this.storage[this.rear]=value
        }
    }
    add_front(value){
       if(this.size()==0){
            this.storage['0']=value
       }
       else{
        this.front-=1
        this.storage[this.front]=value
       }
    }
    pop_front(){
        let temp
        if(this.front===this.rear){
            temp=this.storage[this.front]
            delete this.storage[this.front]
            this.front=0
            this.rear=0
        }
        else{
            temp=this.storage[this.front]
            delete this.storage[this.front]
            this.front+=1
        }
        return temp
    }
    pop_back(){
        let temp
        if(this.front===this.rear){
            temp=this.storage[this.rear]
            delete this.storage[this.rear]
            this.front=0
            this.rear=0
        }
        else{
            temp=this.storage[this.rear]
            delete this.storage[this.rear]
            this.rear-=1
        }
        return temp
    }
    first(){
        if(this.size()===0) return -1
        else return this.storage[this.front]
    }
    last(){
        if(this.size()===0) return -1
        else return this.storage[this.rear]
    }
  
}
const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n')
const [t,...arr]=input
let answer=[]
for(let i=0;i<t;i++){
    //앞의 요소 하나하나씩 shift()로 빼서 저장하면
    //지금까지 했던 것처럼 [i+2]이렇게 안해도 됨
    let deque=new Queue()
    let command=arr.shift().split('')
    let len=Number(arr.shift())
    let array=JSON.parse(arr.shift())
    let type=true
    //true=정방향 false=역방향
    array.forEach((element,index)=>{
        deque.add_back(element)
    })
    let result;
    for(let i=0;i<command.length;i++){
        switch(command[i]){
            case 'R':
                type=!type
                break
            case 'D':
                if(deque.size()===0){
                    result='error'
                }
                else{
                    if(type){
                        deque.pop_front()
                    }
                    else{
                        deque.pop_back()
                    }
                }
        }
    }
    if(result==='error'){
        answer.push(result)
        continue
    }

    result=[]
    
    if(type){
        while(deque.size()!==0){
            result.push(deque.pop_front())
        }
    }
    else{
        while(deque.size()!==0){
            result.push(deque.pop_back())
        }
    }
    answer.push(JSON.stringify(result))
    //JSON.stringift가 없으면 양옆의 대괄호 지워짐
}
console.log(answer.join('\n'))


