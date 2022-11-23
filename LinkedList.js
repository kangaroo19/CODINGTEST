

//연결 리스트의 핵심은 node이며,node는 data를 담는
//data field와 다음 노드를 알려주는 linked field로 구성

const { link } = require("fs")

//링크드 리스트의 가장 큰 장점은 리스트의 길이가 가변적이라는 것
//배열의 단점을 링크드리스트가 커버 할 수 있음
//배열은 크기가 가변적이지 않음, 우선 크기를 정해준 다음 모자라면 메모리를 더 
//할당하고 배열의 데이터를 복사해야됨--->오래걸리고 비효율적

//단점은 어떤 노드를 찾거나 데이터를 변경할때 바로 찾아낼 수가 없음

//데이터가 자주 추가되거나 가변적으로 자주 변하게 될 프로그램이면 -> 링크드리스트
//데이터의 변경이나 탐색을 위한 것이라면 => 배열

class Node{
    constructor(data,next=null){
        this.data=data
        this.next=next
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }
    insertFirst(data){
        this.head=new Node(data,this.head)
        this.size++
    }
    insertLast(data){
        let node=new Node(data)
        let current
        
        if(!this.head){ //head가 없다면
            this.head=node
        }
        else{ //head가 있을때
            current=this.head
            while(current.next){ //this.head에 next가 있다면 즉, next가 null이 아니라면
                current=current.next
            }
            current.next=node
        }
        this.size++
    }
    insertAt(data,index){
        if(index>0 && index>this.size){
            return
        }
        if(index===0){ //if first index
            this.head=new Node(data,this.head)
            this.size++
            return
        }
        const node=new Node(data)
        let current,previous

        current=this.head
        let count=0
        while(count<index){
            previous=current
            count++
            current=current.next
        }
        node.next=current
        previous.next=node
        this.size++
    }
    getAt(index){   //해당 인덱스 값의 값 가져오기
        let current=this.head
        let count=0
        while(current){
            if(count==index){
                console.log(current.data)
            }
            count++
            current=current.next
        }
        return null
    }
    removeAt(index){
        if(index>0 && index>this.size){
            return
        }
        let current=this.head
        let previous
        let count=0
        if(index==0){
            this.head=current.next
        }
        else{
            while(count<index){
                count++
                previous=current
                current=current.next
            }
            previous.next=current.next
        }
        this.size--
    }
}
const arr=[[1,3],[1,4],[3,5],[5,4]]

const linkedlist=new LinkedList()

linkedlist.insertFirst(1)
linkedlist.insertFirst(3)
linkedlist.insertAt(1,4)
linkedlist.insertAt(2,3)




console.log(linkedlist.head)