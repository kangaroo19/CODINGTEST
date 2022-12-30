// const s1='xyZA'
// const s2='ABCxy'
// let index=null
// for(let i=0;i<s1.length;i++){
//     let first=s1.substring(s1.length-i,s1.length)
//     let second=s2.substring(0,i)
//     console.log(first,second)
//     if(first===second) index=i
// }
// console.log(index)
// console.log(s1)
// console.log(s2.substring(index,s2.length))
// console.log(s1+s2.substring(index,s2.length))
// function solution(s1, s2) {
//     if(s1===s2) return s1
//     const answer1=str(s1,s2)
//     const answer2=str(s2,s1)
    
//     if(answer1.length===answer2.length) return (answer1<answer2)?answer1:answer2
//     else return (answer1.length<answer2.length)?answer1:answer2
// }

// function str(s1,s2){
//     let index=null
//     for(let i=0;i<s1.length;i++){
//         let first=s1.substring(s1.length-i,s1.length)
//         let second=s2.substring(0,i)
//         if(first===second) index=i
//     }
//     return s1+s2.substring(index,s2.length)
// }
let n=4

const board=[[1,1,4,3],[3,2,1,4],[3,1,4,2],[2,1,3,3]]
const directionX=[-1,1,0,0]
const directionY=[0,0,-1,1]
const sizeX=board.length
const sizeY=board.length
let answer=0
let nextX=null
let nextY=null
for(let i=0;i<board.length;i++){
    for(let j=0;j<board.length;j++){
        let [x,y]=[i,j] //현재 위치
        
        for(let k=0;k<4;k++){
            nextX=x+directionX[k] //다음에 갈 위치
            nextY=y+directionY[k] //다음에 갈 위치
            if(nextX<0 || nextY<0 || nextX>=sizeX || nextY>=sizeY){ //허용 범위 아닐때
                continue
            }
            
            change(x,y,nextX,nextY) //위치 바꿈
            
            let count=1 //count가 3 이상이면 사탕이 깨짐
            for(let i=1;i<board.length;i++){
                if(board[x][i]===board[x][i-1]) count++
                else count=1
                    
                if(count>=3){
                    console.log('x')
                    console.log(x,y,nextX,nextY)
                    answer++
                    
                    break;
                    
                }
            }
            
            
            count=1
            for(let i=1;i<board.length;i++){
                if(board[i][y]===board[i-1][y]) count++
                else count=1
                if(count>=3){
                    console.log('y')
                    console.log(x,y,nextX,nextY)
                    answer++
                    break;
                   
                }
            }
            count=1
            for(let i=1;i<board.length;i++){
                if(board[i][nextY]===board[i-1][nextY]) count++
                else count=1
                if(count>=3){
                    console.log('nextY')
                    console.log(x,y,nextX,nextY)
                    answer++
                    break;

                }
            }
            count=1
            for(let i=1;i<board.length;i++){
                if(board[nextX][i]===board[nextX][i-1]) count++
                else count=1
                if(count>=3){
                    console.log('nextX')
                    console.log(x,y,nextX,nextY)
                    answer++
                    break;
                    
                }
            }
            change(x,y,nextX,nextY)
            
        }
        
    }
}

function change(x,y,nextX,nextY){
    let tmp=board[x][y]
    board[x][y]=board[nextX][nextY]
    board[nextX][nextY]=tmp
    return board
}

console.log(answer)