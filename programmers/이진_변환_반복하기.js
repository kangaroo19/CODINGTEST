function solution(s) {
    const answer=[0,0]
    while(s.length!==1){
        let slen=s.length
        let x=s.split('').filter(v=>v==='1').length
        let len=slen-x
        answer[0]=answer[0]+1
        answer[1]+=len
        s=x.toString(2)
    }
    return answer
}


