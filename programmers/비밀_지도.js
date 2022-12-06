
function solution(n, arr1, arr2) {
    const answer=[]
    const zero='0'    
    for(let i=0;i<arr1.length;i++){
        let answerStr=''
        let biStr1=arr1[i].toString(2)
        let biStr2=arr2[i].toString(2)
        arr1[i]=[]
        arr2[i]=[]
        arr1[i]=zero.repeat(n-biStr1.length)+biStr1 //앞에 0 붙이기 위함 몇자리 길이의 2진수인지 만약 숫자가 1이고 길이가 6이라면 =>000001 
        arr2[i]=zero.repeat(n-biStr2.length)+biStr2
        for(let j=0;j<n;j++){
            let a=parseInt(arr1[i][j])
            let b=parseInt(arr2[i][j])
            if(a || b) answerStr+='#'
            else answerStr+=' '
        }
        answer[i]=answerStr
    }

    return answer   
}

//다른 사람의 풀이
solution(5,[9, 20, 28, 18, 11],[30, 1, 21, 17, 28])
const solution2=(n,a,b)=>a.map((a,i)=>(a|b[i]).toString(2).padStart(n,0).replace(/0/g,' ').replace(/1/g,'#'))
//a|b[i]통해 30,9라면 => 31반환
//31을 이진수로
//만약 이진수길이가 n보다 작으면 앞에 0붙임 (padStart)
//정규표현식 사용해서 1이면 #,0이면 공백 (' ')
