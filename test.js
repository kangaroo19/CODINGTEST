const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split(' ').map(v=>+v);

//x가 몇번 변해야 z가 변하는지
//x가 1증가 할때마다 y도 증가

let x=input[0]
let y=input[1]
let z=Math.floor(100*y/x)
let count=0

if(z>=99) console.log(-1)
else{
    
}


