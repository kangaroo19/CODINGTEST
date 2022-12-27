function solution(arr1, arr2) {
    
    const answer=Array(arr1.length).fill(Array(arr2[0].length).fill(0))


    for(let row=0;row<arr1.length;row++){
        for(let col=0;col<arr2[0].length;col++){
            let add=arr1[row].reduce((acc,cur,idx)=>{
                return acc+cur*arr2[idx][col]
            },0)
            answer[row][col]=add
        }
    }
    return answer
}