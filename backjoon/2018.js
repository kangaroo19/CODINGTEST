const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split(' ').map(v=>+v);
const n=Number(input[0])
const answer=[]


let start=1;
let end=1;
let count=0

while(start<=end && end<=n+1){
    let value=0
    for(let i=start;i<=end;i++){
        value+=i
    }
    if(value>n) start++
    else if(value<n) end++
    else{
        //console.log(start,end)
        count++
        start++
    }
}
console.log(count)