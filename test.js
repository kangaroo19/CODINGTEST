const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(v=>+v));
const t=nums[0][0]
nums.shift()
function checkRange(row,col){
    if(row>=0 && row<m && col>=0 && col<n) return true
    return false
}
const bfs=(row,col)=>{
    const queue=[]
    queue.push([row,col])
    while(queue.length){
        const [row,col]=queue.shift()
        if(visited[row][col]===0){
            visited[row][col]=1
            number++
            for(let n=0;n<4;n++){
                if(rangeCheck(row+moveRow[n],col+moveCol[n])&&
                input[row+moveRow[n]][col+moveCol[n]]===1 && visited[row+moveRow[n]][col+moveCol[n]]===0){
                    queue.push([row+moveRow[n],col+moveCol[n]])
                }
            }
        }
    }
}
for(let i=0;i<1;i++){
    const [m,n,k]=nums[0]
    const visited=[]
    for(let i=0;i<n;i++){
        visited.push(new Array(m).fill(0))
    }
    const moveRow=[0,0,1,-1]
    const moveCol=[1,-1,0,0]
    for(let row=0;row<n;row++){
        
    }
    
}