function solution(s) {
    s=s.split("").reverse() //pop처리 위해 뒤집고 배열로 변환
    const stack=[]
    let count=0
    while(s.length){
        let x=s.pop()
        stack.push(x)
        while(stack.length){
            if(x===s[s.length-1]){
                stack.push(s.pop())
            }
            else if(x!==s[s.length-1]){
                s.pop()
                stack.pop()
            }
        }
        count++
    }
    return count
}

// x가 a라면 맨 마지막 글자가 a라면 stack 넣고
// 아니라면 stack배열 pop