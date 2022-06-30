const fs=require('fs');
const n=fs.readFileSync("example.txt").toString().trim().split(' ').map(v=>+v);
const num=1000000007

let array=new Array(51)
array[0]=1
array[1]=1
array[2]=3
for(let i=3;i<=n;i++){
    array[i]=(array[i-1]+array[i-2]+1)%num //자기자신도 호출하므로 +1
}

console.log(array[n])

//단순for문으로 구현
