function solution(board, moves) {
    const stack=[] //집은거
    const n=board.length
    let count=0
    const newBoard=[...Array(n)].map(()=>[])
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(board[j][i]===0) continue
            newBoard[i].push(board[j][i])
        }
    }
    newBoard.map((v,i)=>v.reverse())
    for(let i=0;i<moves.length;i++){
        if(!newBoard[moves[i]-1].length) continue
        let pop=newBoard[moves[i]-1].pop()
        stack.push(pop)
        if(stack.length>=2 && stack[stack.length-1]===stack[stack.length-2]){
            stack.pop()
            stack.pop()
            count++
        }
    } 
    return count*2
}


//다른 사람의 풀이
const transpose = matrix =>
    matrix.reduce(
        (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
        []
    );

const solution2 = (board, moves) => {
    const stacks = transpose(board).map(row =>
        row.reverse().filter(el => el !== 0)
    );
    const basket = [];
    let result = 0;

    for (const move of moves) {
        const pop = stacks[move - 1].pop();
        if (!pop) continue;
        if (pop === basket[basket.length - 1]) {
            basket.pop();
            result += 2;
            continue;
        }
        basket.push(pop);
    }

    return result;
};

//tranpose의 인자가 [[1,2,3],[4,5,6]]이라고 가정
//reduce는 [1,2,3] 과 [4,5,6]이 되고
//map은 reduce가 [1,2,3]일때 각 요소(1,2,3)이 된다
//result[0] || [] 은 첫번째 순회일때 result은 빈 배열이므로
// [] 리턴된다 결과는 [...[],1]이 되고 이는 [1]

//[...[1,2,3],4] = > [1,2,3,4]