const fs=require('fs');
const n=fs.readFileSync("example.txt").toString().trim().split(' ').map(v=>BigInt(v));

let array=[0]

function f_mem(n){
    if(n<3) array[n]=1n
    if(!array[n]){
        array[n]=f_mem(n-1)+f_mem(n-2)
    }
    return array[n]
}

if(n===0) console.log(0)
else console.log(f_mem(n).toString())

//입력값 n을 큰수(bigint)로 처리해야함
