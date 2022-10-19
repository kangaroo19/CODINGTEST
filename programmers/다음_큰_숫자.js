function solution(n) {
    const len1=n.toString(2).split('').filter(v=>v==='1').length    
    //이진수로 변환한 수의 1의 개수 저장
    let m=n
    while(1){
        m++
        let len2=m.toString(2).split('').filter(v=>v==='1').length
        if(len2===len1) break
    }
    return m
}

//10진수 => 2진수 변환
//let n=10
//n.toString(2)

//2진수 => 10진수 변환
//let n='1010'
//parseInt(n,2)