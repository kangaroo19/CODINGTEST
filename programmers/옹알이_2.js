function solution(str) {
    const arr=['aya','ye','woo','ma']
    const testArr=['00','11','22','33']
    let count=0
    let answer=null
    for(let i=0;i<str.length;i++){
       for(let j=0;j<arr.length;j++){
            answer=str[i].split(arr[j]) //str[i]에 arr의 요소 있으면 나누고
            str[i]=answer.join(j) //arr의 해당 인덱스로 변환
        }
    }
    for(let i=0;i<str.length;i++){
        if (testArr.some(v=>str[i].includes(v))) continue; //str[i]에 testArr의 요소 하나라도 있으면 불가하므로 continue
        else if(!isNaN(str[i])) count++ //숫자라면 count증가
    }
    return count
}

//--------------------
const test=[1,2,3,4,5]
console.log(test.some((v)=>v>3?true:false)) //하나라도 true면 true반환
console.log(test.every((v)=>v>3?true:false))//모두 true 여야 true 반환


