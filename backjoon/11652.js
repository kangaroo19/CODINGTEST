const fs=require('fs');
const input=fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(v=>BigInt(v));
const n=input.shift()

function getMode(array){
    let map=new Map()
    for(let i=0;i<n;i++){
        if(!map.has(array[i])) map.set(array[i],1)
        else map.set(array[i],map.get(array[i])+1)
    }
    let max=0
    let answer=[]
    map.forEach((element,key)=>{
        if(max<element){
            max=element
            answer=[]//배열 초기화
            answer.push(key)
        }
        else if(max===map.get(key)) answer.push(key)
    })
    answer.sort((a,b)=>{//bigint는 sort안되기 때문에 직접구현해야됨
        if(a>b) return 1
        else if(a<b) return -1
        else return 0
    })
    return answer[0]
}

console.log(getMode(input).toString())//bigint라 정수 뒤에 n이 붙어
//이를 막기위해 .toString사용