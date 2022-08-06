const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split(' ').map(v=>+v);
let n=input[0]
let five=0
let three=0

while(true){
    if(n%5===0){
        five=n/5
        console.log(five+three)
        break;
    }
    if(n<0){
        console.log(-1)
        break;
    }
    n=n-3
    three++
}


