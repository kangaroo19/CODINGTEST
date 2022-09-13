let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim().split('\n'); 
const n = parseInt(input.shift())
const array = input.shift().split(' ').map(v=>+v);
const m = parseInt(input.shift()) 
const target = input.shift().split(' ').map(v=>+v);

array.sort((a,b)=>a-b) //이분탐색위한 정렬
const array2=[[array[0],1]]//같은 수 찾기위한 새로운 배열 생성
//console.log(array2)
for(let i=1;i<n;i++){
    if(array[i]===array[i-1]){//i와 i-1의 값이 서로 같으면 array2[][1]의 값 1증가
        array2[array2.length-1][1]++
    }
    else//아니면 그대로
        array2.push([array[i],1])
}
//console.log(array2)
const answer=[]
function f(num,array){
    let left=0
    let right=array.length-1
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        let midValue=array[mid][0]
        if(num==midValue){
            return answer.push(array2[mid][1])
        }
        else if(num>=midValue)left=mid+1
        else right=mid-1
    }
    return answer.push(0)
}


for(let i of target){
    f(i,array2)
}
console.log(answer.join(" "))

//시간초과나옴