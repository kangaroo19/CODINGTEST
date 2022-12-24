function solution(N, stages) {
    const map=new Map()
    const arr=[]
    let len=stages.length
    for(let i=1;i<=N;i++) map.set(i,0)
    for(let i=0;i<stages.length;i++) if(map.has(stages[i])) map.set(stages[i],map.get(stages[i])+1)
    for(let i=1;i<=N;i++){
        arr.push([])
        arr[i-1].push(i)
        arr[i-1].push(map.get(i)/len)
        len=len-map.get(i)
    }

    arr.sort((a,b)=>{
        if(a[1]===b[1]) return a[0]-b[0]
        else return b[1]-a[1]
    })
    const answer=[]
    arr.forEach((v,_)=>{
        answer.push(v[0])
    })
        return answer
}


//처음에 N만큼 for문을 돌면서 map에 1->0 , 2->0 ,...N->0 형태로 초기화
//stages 배열에 map의 키값에 해당하는 요소가 몇개 있는지 확인
//arr배열에 2차원 배열로 [키값(스테이지),실패율] 형태
//sort함수 사용해서 실패율이 같다면 스테이지 낮은 순으로
//그렇지 않다면 실패율 높은 순으로 리턴
//**어차피 스테이지 순대로 들어가므로 실패율 같을때는 고려하지 않아도 될듯


//다른 사람의 풀이

function solution2(N, stages) {
    let result = [];
    for(let i=1; i<=N; i++){
        let reach = stages.filter((x) => x >= i).length;
        let curr = stages.filter((x) => x === i).length;
        console.log(reach,curr)
        result.push([i, curr/reach]);
    }
    result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => x[0]);
}

console.log(solution2(5,[2, 1, 2, 6, 2, 4, 3, 3]))

//reach => i보다 크다는 것은 i 스테이지 이상 도달한 사람들의 수
//curr => i 스테이지와 동일한 배열 의 길이 