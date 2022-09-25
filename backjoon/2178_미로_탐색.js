const solution=(maps)=>{
    const valueMap=maps.map(i=>i.map(v=>0))
    const sizeX=maps.length
    const sizeY=maps[0].length
    //L -> R -> D -> U 순으로 순회
    const directionX=[-1,1,0,0]
    const directionY=[0,0,-1,1]

    const queue=[]

    const startPositionX=0
    const startPositionY=0

    //set start position
    queue.push([startPositionX,startPositionY])
    valueMap[startPositionX][startPositionY]=maps[startPositionX][startPositionY]
    while(queue.length>0){
        const [x,y]=queue.shift()

        //4 방향 비교
        for(let i=0;i<4;i++){
            const nextX=x+directionX[i]
            const nextY=y+directionY[i]
            
            //표를 벗어난다면
            if(nextX<0 || nextY<0 || nextX>=sizeX || nextY>=sizeY){
                continue
            }
            //갈 수 없는 길이라면
            if(maps[nextX][nextY]<=0){
                continue
            }
            
            //이미 방문한 곳이고 지금 길이 더 길거나 같다면
            if(valueMap[nextX][nextY]>0 &&
                valueMap[x][y] + maps[nextX][nextY]>=valueMap[nextX][nextY]){
                continue
            }
            valueMap[nextX][nextY]=maps[nextX][nextY]+valueMap[x][y]
            queue.push([nextX,nextY])
            
    
            
        }
    }
    return valueMap[sizeX-1][sizeY-1]==0?-1:valueMap[sizeX-1][sizeY-1]
}
const fs = require('fs');
const [table, ...arr] = fs.readFileSync("example.txt").toString().trim().split("\n");
const [R,C] = table.split(' ').map(v=>+v);
const miro = arr.map(v=>v.trim().split('').map(w=>+w));

console.log(solution(miro))

//vscode에서는 입력배열이 이상하게나옴
//miro 배열에 trim붙이니까 해결
