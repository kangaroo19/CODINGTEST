const board=[[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]
const moves=[1,5,3,5,1,2,1,4]	
const n=5
const stack=[] //집은거
let count=0
const newBoard=[...Array(5)].map(()=>[])
for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        if(board[j][i]===0) continue
        newBoard[i].push(board[j][i])
    }
}
newBoard.map((v,i)=>v.reverse())
console.log(newBoard)

for(let i=0;i<moves.length;i++){
    console.log(stack)
    if(!newBoard[moves[i]-1].length) continue
    let pop=newBoard[moves[i]-1].pop()
    stack.push(pop)
    if(stack.length>=2 && stack[stack.length-1]===stack[stack.length-2]){
        stack.pop()
        stack.pop()
        count++
    }
}


console.log(count*2)