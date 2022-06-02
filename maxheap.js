class Heap{ //기본 힙
    constructor(){
        this.items=[];
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

class maxHeap extends Heap{
    bubbleUp(){
        let index=this.items.length-1
        while(this.parent(index)!==undefined&&this.parent(index)<
        this.items[index]){//부모 노드가 존재&&부모노드보다 자식노드 값이 더 클때
            this.swap(index,this.parentIndex(index));
            index=this.parent(index)
        }
    }
    bubbleDown(){
        let index = 0;
        
        while(this.leftChild(index)  !== undefined && (this.leftChild(index) > this.items[index] || this.rightChild(index) > this.items[index])){
            let largerIndex = this.leftChildIndex(index);
            if(this.rightChild(index)  !== undefined && this.rightChild(index) > this.items[largerIndex]){
                largerIndex = this.rightChildIndex(index);
            }
            this.swap(largerIndex, index);
            index = largerIndex;
        }
    }
    add(item){
        this.items[this.items.length]=item;
        this.bubbleUp()
    }
    pull(){//첫번째 원소 빼는 함수
        let item=this.items[0]
        this.items[0]=this.items[this.items.length-1]
        this.items.pop()
        this.bubbleDown();
        return item;
    }
}


const max=new maxHeap()
max.add(1)
max.add(5)
max.add(10)
max.add(7)
max.add(3)

console.log(max.pull())
console.log(max)