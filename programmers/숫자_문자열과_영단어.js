function solution1(str) {
    const arr=['zero','one','two','three','four','five','six','seven','eight','nine']
    while(isNaN(str)){ //str이 NaN타입일 때 까지 반복
        for(let i=0;i<10;i++){
            let letter=arr[i] //letter에 찾을 요소 저장
            let regexAllCase=new RegExp(letter,'gi')
            str=str.replace(regexAllCase,String(i)) //인덱스 번호로 바꿔줌
        }
    }
    return Number(str)
}

//다른 사람의 풀이
function solution2(str){
    const numArr=['zero','one','two','three','four','five','six','seven','eight','nine']
    for(let i=0;i<numArr.length;i++){
        let arr=str.split(numArr[i]) //먄약 one을 만났다면 one을 기준으로 나누고 배열로 리턴
        str=arr.join(i) //배열 간격을 1로두고 합침
    }
    return Number(str)
}

//---------------------------------------------
const test='one4sevenoneeight'
const testArr=test.split('one') //[ '', '4seven', 'eight' ]
const testStr=testArr.join(1) //14seven1eight


const aa=[1,2,3,4,5]
console.log(aa.join('-')) //1-2-3-4-5

