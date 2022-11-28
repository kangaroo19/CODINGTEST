function solution(a, b) {
    let mapA=new Map()
    let mapB=new Map()

    a.split('').sort((a,b)=>b-a).forEach((v,i)=>{
        if(!mapA.has(v)) mapA.set(v,1) //인자 a의 각 값이 얼마나 나왔는지
        else mapA.set(v,mapA.get(v)+1) //인자 b의 각 값이 얼마나 나왔는지
    })
    b.split('').sort((a,b)=>b-a).forEach((v,i)=>{
        if(!mapB.has(v)) mapB.set(v,1)
        else mapB.set(v,mapB.get(v)+1)
    })
    let mapAnswer=new Map()

    for(let i of mapA){
        for(let j of mapB){
            if(i[0]===j[0]){ //0번 인덱스는 key,1번은 value
                mapAnswer.set(i[0],Math.min(i[1],j[1])) //둘중 작은 값 넣기 원래는 두 값을 더해서 2로 나누엇는데 만약 a가 555 b가 5라면 => 55가 나온다는 에러
                break;
            }
        }
    }
    console.log(mapAnswer)
    let answer=[]
    
    if(mapAnswer.size===0){ //짝 없을때
        return '-1'
    }

    else{
        mapAnswer.forEach((v,k)=>{
            for(let i=0;i<v;i++){
                answer.push(k)
            }
            
        })
        if(answer.every(v=>v==='0')){ //모든 요소가 0이라면 '000'으로 나올 수 없으므로 그냥'0' 리턴
            return '0'
        }
        else{
            return answer.join('').toString()
        }
    }
}