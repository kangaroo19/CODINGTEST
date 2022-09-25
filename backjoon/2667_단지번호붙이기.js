let fs = require("fs");
let input = fs.readFileSync("example.txt").toString().split("\n");
const n = Number(input[0]);
input.shift();
input = input.map((element) => {
  return element
    .trim()
    .split("")
    .map((element) => Number(element));
});

const visited=[]
for(let i=0;i<n;i++){
    visited.push(new Array(n).fill(0))
}

const moveRow=[0,0,1,-1]
const moveCol=[1,-1,0,0]

const rangeCheck=(row,col)=>{
    if(row>=0 && row <n && col>=0 && col<n) return true
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
const complex=[]
let number=0
for(let row=0;row<n;row++){
    for(let col=0;col<n;col++){
        if(Number(input[row][col])===1 && visited[row][col]===0){
            bfs(row,col)
            complex.push(number)
            number=0
        }
    }
}
complex.sort((a,b)=>a-b)
const answer=[complex.length,...complex]
console.log(answer.join("\n"))