function solution(k, tangerine) {
    const map=new Map()
     let count=0
     for(let i=0;i<tangerine.length;i++){
         map.set(tangerine[i],(map.get(tangerine[i])||0)+1)
     }
 
     const arr=[...map]
     arr.sort((a,b)=>b[1]-a[1])
 
     for(let i=0;i<arr.length;i++){
         if(arr[i][1]>=k){
             count++
             break;
         }
         k=k-arr[i][1]
         count++
         if(k<=0) break;
     }
     return count
 }
 
//tangerince의 요소를 맵으로 만들고 키값은 각요소 value는 몇개 나왔는지로 초기화
//만든 맵을 배열로 변환 후 value를 기준으로 내림차순 정렬
//만약 value(arr[][1])이 k보다 크거나 같으면 1 리턴(내림차순 정렬햇으므로 중간에 이 코드가 실행될 일 없음)
//그렇지 않다면 k에서 value값을 빼고 하나를 선택한 뜻이므로 count+1


function solution2(k,tangerine){
    let answer=0
    const tDict={}
    tangerine.forEach((t)=>tDict[t]=(tDict[t]||0)+1)
    const tArr=Object.values(tDict).sort((a,b)=>b-a) 
    for(let t of tArr){
        answer++
        if(k>t) k=k-t
        else break
    }
    return answer
}

solution2(k,tangerine)


//나의 풀이와 비슷한 방식이지만 객체 사용