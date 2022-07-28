const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n')
const t=Number(input.shift())



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

for(let i=0;i<t;i++){
    let q=new Queue()
    let words=Array.from(input[i*3])
    let len=Number(input[i*3+1])
    let arr=JSON.parse(input[i*3+2])
    words.forEach((element,index)=>{
        
        if(element==='R'){
            for(let j=0;j<len;j++){
                q.add_front(arr[j])
            }
        }
        else if(element==='D'){
            q.pop_front()
        }
    })
    
}



let q=new Queue()
q.add_front(1)
q.add_front(2)
q.add_front(3)
q.add_front(4)
q.pop_front()
console.log(q.size())


// let p=new Queue()
// p.add_back(1)
// p.add_back(2)
// p.add_back(3)
// p.add_back(4)
// p.pop_front()

// console.log(p.storage)