class Stack{
    constructor(){
        this.arr=[]
        this.index=0
    }
    push(item){
        this.arr[this.index++]=item
    }
    pop(){
        if(this.index<=0) return null
        const result=this.arr[--this.index]
        return result
    }
}

const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n')

const word=input.shift()
const n=Number(input.shift())
const array=input

let cur=word.length-2
//제출시 -1
console.log(cur)
array.forEach((element,index)=>{
    switch(element[0]){
        case 'L':
            if(cur===-1) return
            cur--
            break;
        case 'D':
            if(cur===word.length) return
            cur++
    }
})

console.log(cur)