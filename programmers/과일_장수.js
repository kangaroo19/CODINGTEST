function solution1(k, m, score) {
    score.sort((a,b)=>a-b) //오름차순 정렬
    let sum=0
    while(m<=score.length){ //score의 길이가 m보다 작으면 break
        const arr=[]
        for(let i=0;i<m;i++){
            arr.push(score.pop()) //같은 박스에 담을 사과들 m개 만큼 arr배열에 푸시
        }
        sum+=Math.min(...arr)*m //arr 배열에 있는 사과중 가장 작은 수
    }
    return sum
}

// 다른 사람의 풀이
function solution2(k, m, score) {
    let answer = 0;
    const sortedScore = score.sort((a, b) => a - b).slice(score.length % m);
    for (let i = 0; i < sortedScore.length; i += m) {
        answer += sortedScore[i] * m;
    }
    return answer;
}



