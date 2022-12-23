function solution(n, words) {
    const stack=[words[0]]
    for(let i=1;i<words.length;i++){
    if(stack[i-1][stack[i-1].length-1]===words[i][0]){
        stack.push(words[i])
    }
    else{
        stack.push(false)
        break
    }
    for(let j=0;j<stack.length-1;j++){
        if(words[i]===stack[j]){
            stack.pop()
            stack.push(false)
            break
        }
    }
}

for(let i=0;i<stack.length;i++){
    if(stack[i]===false){
        return [i%n+1,Math.floor(i/n+1)]
    }
}
    return [0,0]
}

//stack 배열에 올바른 끝말잇기라면 현재 값을 push하고
//그렇지 않다면 false를 push하고 for문 빠져나옴
//for문을 빠져나오지 않은상태(올바른 값이 들어간 상태)라면
//방금 stack에 들어간 값과 지금까지 stack에 들어온 값을 비교해서
//중복된 값이 있으면 올바르지 않은 값 이므로 pop한 후 false push
//이후 stack 배열 안에 false 가 있다면 정답 리턴하고
//없다면 완벽한 단어이므로 [0,0]리턴
//제출할때는 제한사항에 있었으나 자꾸 틀려서 words의 각 요소가
//한 글자 일때도 처리 했으나 없어도 됨 이 코드에는 없음
//다른 사람의 풀이

function solution2(n, words) {
    let answer = [0, 0];
  
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let p = i % n + 1;
      let turn = Math.ceil((i + 1)/n);
        
      if (i > 0) {
        // 이전 단어 마지막 글자
        let last = words[i - 1].split("").pop();
        console.log(last)
        // 중복이거나 틀린 경우
        if (i > words.indexOf(word) || words[i][0] !== last) {
          answer = [p, turn];
          break;
        }
      }
    }
  
    return answer;
  }
//indeoxOf는 처음으로 나타나는 위치의 인덱스 값 리턴하므로
//['aa','bb','cc',....'bb']일 때
//현재 인덱스 값이 10(맨 마지막)이라고 가정하면
//i=10 인데 words.indexOf(word)는 'bb'가 가장 처음 나온 위치는 1 이다
//10>1 이므로 조건 성립
  console.log(solution2(3,["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]))