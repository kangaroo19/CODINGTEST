const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(v=>+v));
const t=nums[0][0]
nums.shift()

let count


for(let i=0;i<1;i++){
  
    count=0
    const [m,n,k]=nums[0]
    nums.shift()
    const visited=[]
    const array=[]
    for(let i=0;i<n;i++){
        visited.push(new Array(m).fill(0))
        array.push(new Array(m).fill(0))
    }
    for(let i=0;i<k;i++){
        const [col,row]=nums[i]
        array[row][col]=1
    }
    
    const moveRow=[0,0,1,-1]
    const moveCol=[1,-1,0,0]
    for(let row=0;row<n;row++){
        for(let col=0;col<m;col++){
            if(Number(array[row][col]===1 && visited[row][col]===0)){
                bfs(row,col)
            }
        }
        
    }
    function rangeCheck(row,col){
        if(row>=0 && row<m && col>=0 && col<n) return true
        return false
    }
    function bfs(row,col){
        const queue=[]
        queue.push([row,col])
        while(queue.length){
            const [row,col]=queue.shift()
            if(visited[row][col]===0){
                visited[row][col]=1
                for(let n=0;n<4;n++){
                    if(rangeCheck(row+moveRow[n],col+moveCol[n])&&
                    input[row+moveRow[n]][col+moveCol[n]]===1 && visited[row+moveRow[n]][col+moveCol[n]]===0){
                        queue.push([row+moveRow[n],col+moveCol[n]])
                    }
                }
            }
        }
    }
}

console.log(count)
