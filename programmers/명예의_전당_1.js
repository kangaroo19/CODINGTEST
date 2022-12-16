function solution(k, score) {
    const result=[] //명예의 전당, 길이는 k를 넘을 수 없음
    const answer=[] //명예의 전당에서 가장 작은 값
    score.forEach((v,i)=>{
        if(i<k){
            result.push(v)
            answer.push(Math.min(...result))
        }
        else{
            let min=Math.min(...result)
            if(min<v){
                let minIndex=result.indexOf(min)
                result.splice(minIndex,1)
                result.push(v)
            }
            answer.push(Math.min(...result))
        }
    })
    return answer;
}
//k이전까지는 result배열에 각 요소 푸시
//k이후에는 최하위 점수가 새로 들어온 수 보다 작으면
//최하위 점수 빼고 새로 들어온 수 넣음
function solution2(k, score) {
    const stack = []
    return score.reduce((a,c) => {
        console.log(a,c)
        if(stack.length < k) {
            stack.push(c)
            stack.sort((a,b) => a - b)
        }
        else {
            stack.push(c)
            stack.sort((a,b) => a - b)
            stack.shift()
        }
        a.push(stack[0])
        return a
    },[])//reduce 함수의 두번째 인자(첫번째 인자인 콜백함수아님)는 acc초기화 값
}

solution2(3,[10, 100, 20, 150, 1, 100, 200])
