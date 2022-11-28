function solution(land) {
    let answer = 0;
    for(let i=1;i<land.length;i++){
            land[i][0]=land[i][0]+Math.max(land[i-1][1],land[i-1][2],land[i-1][3])
            land[i][1]=land[i][1]+Math.max(land[i-1][0],land[i-1][2],land[i-1][3])
            land[i][2]=land[i][2]+Math.max(land[i-1][0],land[i-1][1],land[i-1][3])
            land[i][3]=land[i][3]+Math.max(land[i-1][0],land[i-1][1],land[i-1][2])   
    }

    return Math.max(...land[land.length-1]);
}

//land[i][0]인 경우
//위 행의 0번째인덱스를 제외한
//land[i-1][1],land[i-1][2],land[i-1][3]
//얘네들이 가능하므로 land[i][0]에 이중 큰값더함

//다른 사람의 풀이

const land=[[1,2,3,5],[5,6,7,100],[1,2,3,4]]
function solution2(land){
    for(let i=0;i<land.length;i++){
        for(let j=0;j<4;j++){
            if(i===0) continue
            else{
                let arr=land[i-1].slice() //깊은복사 위함
                arr[j]=0 //arr[i-1][j]를 0으로 초기화함으로써 같은 열의 원소는 접근하지 않음,가장 낮은 값으로 설정했기때문 (Math.max에 걸리지 않음)
                land[i][j]+=Math.max(...arr)
            }
        }
    }
    return Math.max(...land[land.length-1])
}

console.log(solution2(land))
