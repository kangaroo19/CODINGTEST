function solution(s) {
    const array=s.split(" ").map(v=>v.split(''))
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array[i].length;j++){
            if(j===0) array[i][j]=array[i][j].toUpperCase()
            else array[i][j]=array[i][j].toLowerCase()
        }
    }
    console.log(array.join(" "))
    return array.join(" ").replace(/,/g,"")
}
const str='3people unFollowed me'
console.log(solution(str))
//리턴 할때 그냥 join만 하면 쉼표가 추가되어
//replace함수로 쉼표를->공백없는 빈칸으로 바꿈
//근데 첫번째 인자를 ','로만 하면 replace 함수는 첫번째로 
//찾은 요소만 바꿔주므로 정규식 사용
//정규식은 /로 감싸고 g는 모든요소 라는 뜻(global)


//--------------다른 사람의 풀이-------------

function otherSolution(s){
    return s.split(' ').map(v=>v.charAt(0).toUpperCase()+v.substring(1).toLowerCase()).join(" ")
}

console.log(otherSolution(str))