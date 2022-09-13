const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const n=input[0].length

const array=[]
for(let i=0;i<n;i++){
    for(let j=1;j<n;j++)
    array.push(input[0].substring(i,i+j))
}
array.push(input[0])

let map=new Map()
for(let i=0;i<array.length;i++){
    map.set(array[i],i)
}

console.log(map.size)


//문자열 나누고 맵으로 만듦(중복제거)
//키는 유일