const fs=require('fs');
const n=fs.readFileSync("example.txt").toString().trim().split('\n').map(v=>BigInt(v));
const array=[]
array[0]=0n,array[1]=1n,array[2]=1n
for(let i=3;i<=n;i++){
    array[i]=array[i-2]+array[i-1]
}

console.log(array[n].toString())