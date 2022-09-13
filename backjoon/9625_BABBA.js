const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split(' ');
const n=Number(input[0])

const dpA=[1,0,1]
const dpB=[0,1,1]

for(let i=3;i<=n;i++){
    dpA[i]=dpA[i-1]+dpA[i-2]
    dpB[i]=dpB[i-1]+dpB[i-2]
}

console.log(dpA[n],dpB[n])