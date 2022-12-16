function solution(str) {
    const answer=[]
    const map=new Map()
    for(let i=0;i<str.length;i++){
        if(!map.has(str[i])){
            answer.push(-1)
            map.set(str[i],i)
        }
        else{
            answer.push(i-map.get(str[i]))
            map.set(str[i],i)
        }
    }
    return answer
}

//str의 각 요소를 순회
//map에 각 요소가 없으면 처음 나온 문자 란 뜻이므로
//answer에 -1 push하고, map에 키:해당 문자,값:해당 문자의 인덱스로 set

//처음 나온 문자가 아니라면
//현재 인덱스값 - map의 해당요소의 값(얼마나 떨어져 있는지)

//다른사람의 풀이
function solution2(s) {
    const hash={};
    return [...s].map((v,i)=>{
        let result = hash[v] !== undefined ? i - hash[v] : -1;
        hash[v] = i; //키:v , 값:i
        console.log(hash)
        return result;
    });
}

solution2('banana')