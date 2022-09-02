const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' '));
const word=nums[0].toString()
let cursor=word.length
const n=Number(nums[1])
console.log(n)
console.log(nums)



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
                return current.data
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
    toString(){
        let array=[]
        let current=this.head
        while(current.next!==null){
            array.push(current.data)
            current=current.next
        }
        return array
    }
}

const linkedlist=new LinkedList()

for(let i=0;i<word.length-1;i++){
    linkedlist.insertLast(word[i])
}

for(let i=2;i<n+2;i++){
    if(nums[i][0]==='P'){
        linkedlist.insertAt(nums[i][1].trim(),cursor-1)
        cursor++
    }
    else if(nums[i][0].trim()==='L'){
        cursor--
        if(cursor<0) cursor=0
    }
    else if(nums[i][0].trim()==='B'){
        linkedlist.removeAt(cursor)
    }
    else if(nums[i][0].trim()==='D'){
        cursor++
        if(cursor>linkedlist.size) cursor=linkedlist.size
    }
}
let array=[]


for(let i=0;i<linkedlist.size;i++){
    array.push(linkedlist.getAt(i))
}
console.log(array)