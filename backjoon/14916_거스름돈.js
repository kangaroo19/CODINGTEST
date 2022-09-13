const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split(' ');
let n=Number(input[0])
let two=0
let five=0
while(1){
    if(n%5==0){
        five=n/5
        console.log(five+two)
        break
    }
    if(n<0){
        console.log(-1)
        break
    }
    n=n-2
    two++
}
