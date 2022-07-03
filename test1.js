const array=[3,9,1,7,5]
array.sort((a,b)=>a-b)

let start=0
let end=array.length-1
let k=10
let answer=[]
let realAnswer=[]
    while(start<end){
        value=array[start]+array[end]
        if(value<k){
            answer.push(value)
            start++
        }
        else if(value>k){
            answer.push(value)
            end--
        }
        else{
            realAnswer.push(value)
            start++
        }
    }
    console.log(answer)
    console.log(realAnswer)
    if(realAnswer[0]!==undefined){
        console.log(realAnswer.length)
    }
    else{
        let min=99999
        for(let i=0;i<answer.length;i++){
            if(Math.abs(answer[i]-k)<min){
                min=Math.abs(answer[i]-k)
            }
        }
        let count=0
        for(let i=0;i<answer.length;i++){
        if(Math.abs(answer[i]-k)===min){
            count++
        }
    }
    console.log(count)
    }