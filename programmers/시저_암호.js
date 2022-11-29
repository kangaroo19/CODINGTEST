function solution(s, n) {
    const answer=[]
    for(let i=0;i<s.length;i++){
        if(s[i]===' '){
            answer.push(' ')
            continue
        }
        let push=s[i].charCodeAt()+n
        if((s[i]===s[i].toUpperCase()) && push>90) push=push-25-1 //대문자이고 90('Z')이상 숫자라면
        if((s[i]===s[i].toLowerCase()) && push>122) push=push-25-1//소문자이고 122('z')이상 숫자라면
        
        answer.push(String.fromCharCode(push))
    }
    return answer.join('')
}