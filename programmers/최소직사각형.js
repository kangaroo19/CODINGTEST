function solution(sizes) {
    for(let i=0;i<sizes.length;i++){
        sizes[i].sort((a,b)=>a-b)
    }
    const arrayA=[]
    const arrayB=[]
    for(let i=0;i<sizes.length;i++){
        arrayA.push(sizes[i][0])
        arrayB.push(sizes[i][1])
    }
    return Math.max(...arrayA)*Math.max(...arrayB)
}
