const numbers=[10,3,8,4,1]
function compare(a,b){
    return a-b
}

numbers.sort(compare)

console.log(numbers)

//반환값<0 : a가 b보다 앞에 위치
//반환값==0 : a와 b순서 바꾸지 않음
//반환값>0 : b가 a보다 앞에 위치