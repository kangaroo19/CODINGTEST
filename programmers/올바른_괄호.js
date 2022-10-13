function solution(s){
    const words=s.split("")
    const stack=[]
    if(words.length%2===1) return false //홀수인 경우 올바른 괄호 아니므로 false
    words.forEach((v,i)=>{
        if(v==='('){
            stack.push(v)
        }
        else if(v===')'){
            if(stack[stack.length-1]==='(') stack.pop()
            else return false //처음부터 ')'가 나오는 경우 => 올바른 괄호 아니므로 false
        }
    })
    return (!stack.length)?true:false
}

//'('가 나오면 stack에 푸시하고
//')'가 나오면 스택의 마지막 요소가 '('라면 stack에서 pop


//--------------다른 사람의 풀이-------------
const s='(())'
function solution1(s){
    let cum = 0
    for (let paren of s) { //for...of는 값 출력
        cum += paren === '('? 1: -1
        if(cum < 0) { //처음부터 ')'가 나오는 경우
            return false
        }
    }
    return cum === 0? true: false;
}
console.log(solution1(s))

//'('가 나오면 cum에 +1
//')'가 나오면 cum에서 -1
//결과적으로 올바른 괄호라면 cum이 0이됨