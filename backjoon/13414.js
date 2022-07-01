const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' '));
const k=nums[0].shift()
const l=nums[0].shift()
nums.shift()

let array=[]
for(let i=0;i<l;i++){
    array.push(nums[i][0])   
}

let map=new Map()
for(let i=0;i<l;i++){
    if(!map.has(array[i])){
        map.set(array[i],1)//value 값 1은 신경안써도됨
    }
    else{
        map.delete(array[i])
        map.set(array[i],1)
    }
}

let count=0
let answer=[]
map.forEach((value,key)=>{
    if(count<k){
        answer.push(key)
        count++
    }
})

console.log(answer.join("\n"))

//입력받은 값을 맵으로 만듬
//키값이 동일한것이 나오면 원래있던 것 삭제(delete)하고
//맵에 넣음(set)
//결과적으로 동일한 값이 나오면 마지막에 나온 학번이 남아야함
//이러한 과정 없으면 맵의 중복을 제거하는 특성때문에
//동일한 값이 나올때 처음에 나온 학번이 남음
//원래는 숫자 형태로 배열을 만들어 맵에 넣었는데
//학번이 0으로 시작하는 놈들 때문에
//원래 값은 01111111인데 1111111 으로 앞자리 0이 생략되어 오류가 났었음
