const fs=require('fs');
const { urlToHttpOptions } = require('url');
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

let q=new Queue()
let answer=""
for(let i=0;i<n;i++){
    if(input[i][1]==='u' && input[i][5]==='f'){
        q.add_front(Number(input[i].substring(11)))
    }
    else if(input[i][1]==='u' && input[i][5]==='b'){
        q.add_back(Number(input[i].substring(10)))
    }
    else if(input[i][4]==='f' && input[i].length<=10){
        if(q.size()===0){
            answer+=-1+"\n"
        }
        else{
            answer+=q.first()+"\n"
            q.pop_front()
        }
    }
    else if(input[i][4]==='b' && input[i].length<=10){
        if(q.size()===0){
            answer+=-1+"\n"
        }
        else{
            answer+=q.last()+"\n"
            q.pop_back()
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

