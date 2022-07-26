const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n')
const n=Number(input.shift())

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
    add(value){
        if(this.size()===0){
            this.storage['0']=value
        }
        else{
            this.rear+=1
            this.storage[this.rear]=value
        }
    }
    popleft(){
        let temp
        if(this.front===this.rear){
            this.storage[this.front]
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
    first(){
        if(this.size()===0) return -1
        else return this.storage[this.front]
    }
    last(){
        if(this.size()===0) return -1
        else return this.storage[this.rear]
    }
}

let q=new Queue()
let answer=""
for(let i=0;i<n;i++){
    if(input[i][0]==='p' && input[i].length>=6){
        q.add(Number(input[i].substring(5)))
    }
    else if(input[i][0]==='p' && input[i].length<=4){
        if(q.size()===0){
            answer+=-1+"\n"
        }
        else{
            answer+=q.first()+"\n"
            q.popleft()
        }
    }
    else if(input[i][0]==='s'){
        answer+=q.size()+"\n"
    }
    else if(input[i][0]==='e'){
        if(q.size()===0) answer+=1+'\n'
        else answer+=0+'\n'
    }
    else if(input[i][0]==='f'){
        answer+=q.first()+'\n'
    }
    else{
        answer+=q.last()+'\n'
    }
}

console.log(answer)