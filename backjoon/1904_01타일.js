const fs=require('fs');
const { hasUncaughtExceptionCaptureCallback } = require('process');
const input=fs.readFileSync("example.txt").toString().trim().split(' ').map(v=>+v);
const n=input.shift()

let array=[0,1,2,3]
for(let i=4;i<=n;i++){
    array[i]=(array[i-1]+array[i-2])%15746
}
console.log(array[n])

//피보나치 비슷