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

let word=input.shift().trim()
const n=Number(input.shift())
const array=input

let cur=word.length-1
let stack1=new Stack()


//제출시 -1
console.log(cur)
array.forEach((element,index)=>{
    switch(element[0]){
        case 'L':
            cur--
            if(cur<=-1) cur=-1
            break;
        case 'D':
            if(cur===word.length) return
            cur++
            break;
        case 'P':
            let num=element.substring(2).trim()
            if(cur!==-1){
                for(let i=0;i<word.length;i++){
                    stack1.push(word[i])
                    if(i+1===cur+1){
                        stack1.push(num)
                    }
                }
            }
            else{ //cur가 -1일때
                for(let i=0;i<word.length;i++){
                    stack1.push(word[i])
                    if(i===cur+1){
                        stack1.push(num)
                    }
                }
            }
            word=stack1.arr
            stack1.arr=[]
            stack1.index=0
            cur++
            break;
        case 'B':
            for(let i=0;i<word.length;i++){

            }
    }
})

console.log(word)