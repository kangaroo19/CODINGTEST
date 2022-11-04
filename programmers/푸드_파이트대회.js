function solution(food) {
    const arr=[]
    for(let i=1;i<=food.length-1;i++){
        arr.push(Math.floor(food[i]/2))
    }
    let answer=""
    for(let i=0;i<arr.length;i++){
        if(arr[i]===0) continue
        answer+=(i+1).toString().repeat(arr[i])
    }
    const rAnswer=[...answer].reverse()
    return answer+0+rAnswer.join('')
}