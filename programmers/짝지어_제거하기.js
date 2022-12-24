function solution(s){
    const stack=[]

    for(let i=0;i<s.length;i++){
        stack.push(s[i])
        if(stack.length>=2 && 
            stack[stack.length-1]===stack[stack.length-2]){
                stack.pop()
                stack.pop()
            }
    }
    return (!stack.length)?1:0
}

//각 요소를 stack배열에 push하고
//stack배열의 마지막 요소(stack.length-1)와
//stack배열의 마지막에서 두번째요소(stack.length-2)가 
//같으면 pop두번
//결과적으로 stack배열이 빈배열이라면 1
//그렇지 않다면 0 리턴