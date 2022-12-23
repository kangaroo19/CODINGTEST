function solution(brown, yellow) {
    const num=brown+yellow
    const arr=[]
    const answer=[]
    for(let i=1;i<=Math.floor(Math.sqrt(num));i++){
        if(num%i===0){
            arr.push(i)
        }
    }

    let x=arr[arr.length-1]
    let y=num/x
    let i=arr.length-1
    while((x-2)*(y-2)!==yellow){
        x=arr[i]
        y=num/x
        i--
    }

    answer.push(x)
    answer.push(y)
    return answer.sort((a,b)=>b-a)
}