const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n').map(v=>+v);
const n=input.shift()

class Heap{
    constructor(){
        this.items=[]
    }
    swap(index1,index2){
        let temp=this.items[index1]
        this.items[index1]=this.items[index2]
        this.items[index2]=temp
    }
    parentIndex(index){
        return Math.floor((index-1)/2)
    }
    leftChildIndex(index){
        return index*2+1
    }
    rightChildIndex(index){
        return index*2+2
    }
    parent(index){
        return this.items[this.parentIndex(index)]
    }
    leftChild(index){
        return this.items[this.leftChildIndex(index)]
    }
    rightChild(index){
        return this.items[this.rightChildIndex(index)]
    }
    peek(){
        return this.items[0]
    }
    size(){
        return this.items.length
    }
}

class absHeap extends Heap{
    bubbleUp(){
        let index=this.items.length-1
        while(this.parent(index)!==undefined && Math.abs(this.parent(index))>Math.abs(this.items[index])){
            this.swap(index,this.parentIndex(index))
            index=this.parentIndex(index)
        }
    }
    bubbleDown(){
        let index=0
        while(this.leftChild(index)!==undefined&&
        (Math.abs(this.leftChild(index))<Math.abs(this.items[index]) || Math.abs(this.rightChild(index))<Math.abs(this.items[index]))){
            let smallerIndex=this.leftChild(index)
            if(this.rightChild(index)!==undefined && Math.abs(this.rightChild(index))<Math.abs(this.leftChild(index))){
                smallerIndex=this.rightChild(index)
            }
        this.swap(index,smallerIndex)
        index=smallerIndex          
        }
    }
    add(item){
        this.items[this.items.length]=item
        this.bubbleUp()
    }       
    poll(){
        let item=this.items[0]
        this.items[0]=this.items[this.items.length-1]
        this.items.pop()
        this.bubbleDown()
        return item
    }
}
const abs=new absHeap()
abs.add(-1)
abs.add(1)
abs.add(2)
abs.add(1)
abs.add(2)
// abs.add(-2)
abs.poll()
abs.poll()

console.log(abs)


// const abs=new absHeap()
// let answer=""
// for(let i=0;i<n;i++){
//     if(input[i]!==0) abs.add(input[i])
//     else{
//         answer+=(abs.size()===0)?0+"\n":abs.poll()+"\n"
//     }
//  }
 
//  console.log(answer)

