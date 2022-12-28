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


console.log(solution([[1, 4], [3, 2], [4, 1]],[[3, 3], [3, 3]]))
//console.log(solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]],[[5, 4, 3], [2, 4, 1], [3, 1, 1]]))

//반복문 세개 (for,for,reduce)

function solution2(arr1, arr2) {
    return arr1.map((row) => arr2[0].map((x,y) => row.reduce((a,b,c) => a + b * arr2[c][y], 0)))
}