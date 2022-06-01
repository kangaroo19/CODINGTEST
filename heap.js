class Heap{
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
        return index*2+1;
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
    peek(){ //최소 힙의 경우 최솟값 반환 최대힙이면 최댓값
        return this.items[0]
    }
    size(){
        return this.items.length
    }
}

class minHeap extends Heap{
    bubbleUp(){
        let index=this.items.length-1
        while(this.parent(index)!==undefined && this.parent(index)>this.items[index]){
            this.swap(index,this.parentIndex(index))
            index=this.parentIndex(index)
        }
    }
    bubbleDown(){
        let index=0
        while(this.leftChild(index)!==undefined && 
        (this.leftChild(index)<this.items[index] || this.rightChild(index)<this.items[index])){
            let smallerIndex=this.leftChildIndex(index)
            if(this.rightChild(index)!==undefined && this.rightChild(index)< this.items[smallerIndex]){
                smallerIndex=this.rightChildIndex(index)
                //leftchild가 rightchild보다 크면 right<=>item[0]바꿈
                //이게 없다면 부모노드에 최솟값 저장 안될수도 있음
            }
            this.swap(index,smallerIndex)
            index=smallerIndex
        }
    }
    add(item){ //힙에 원소 추가하는 함수
        this.items[this.items.length]=item
        this.bubbleUp()
    }
    poll(){
        let item=this.items[0] //첫번째 원소 keep
        this.items[0]=this.items[this.items.length-1]
        //맨 마지막 원소를 첫번째 원소로 복사
        this.items.pop()//마지막 원소 삭제
        this.bubbleDown()//정렬

        return item
    }
}

const minheap=new minHeap()
minheap.add(1)
minheap.add(10)
minheap.add(5)
minheap.add(100)
minheap.add(8)



console.log(minheap)