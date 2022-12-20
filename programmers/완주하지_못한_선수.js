function solution(participant, completion) {
    const map1=new Map()
    const map2=new Map()
    const answer=[]
    for(let item of completion){
        if(!map1.has(item)) map1.set(item,1)
        else map1.set(item,map1.get(item)+1)
    }
    for(let item of participant){
        if(!map2.has(item)) map2.set(item,1)
        else map2.set(item,map2.get(item)+1)
    }
    map2.forEach((v,k)=>{
        if(!map1.has(k) || map1.get(k)!==map2.get(k)) answer.push(k)
    })
    return answer[0]
}


//참가자(첫번째 인자) 맵을 만듦(map1) 처음나온 요소라면 1
//그렇지 않다면 원래 value에 +1

//완주자(두번쨰 인자) 맵을 만듧 코드는 위와 동일

//map2 맵을 돌면서 키값이 map1에 존재하지 않거나 (OR)
//map1 과 map2의 value가 서로 같지 않다면 
//answer에 푸시


//다른 사람의 풀이
function solution2(participant, completion) {
    const map = new Map();

    for(let i = 0; i < participant.length; i++) {
        let a = participant[i], 
            b = completion[i];

        map.set(a, (map.get(a) || 0) + 1); //참가자에서 나온 사람은 +1
        map.set(b, (map.get(b) || 0) - 1); //완주자에서 나온 사람은 -1
    }
    console.log(map)

    for(let [k, v] of map) {
        if(v > 0) return k;
    }

    return 'nothing';
}
//결과적으로 참가하고 완주까지 한사람은 0 그렇지 않은 사람은 0보다 큰 수 저장됨
console.log(solution2(["leo", "kiki", "eden"],["eden", "kiki"]))