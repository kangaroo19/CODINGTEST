let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim().split(' ');
const A=parseFloat(input[0]);
const B=parseFloat(input[1]);
const N=parseInt(input[2]);
const str=String(parseFloat(A/B));
console.log(str)
if(B==1){
    console.log(0);
}
else{
    console.log(str[N+1]);
}

console.log(1.1234567890123456789)
//자바스크립트는 못푸는거 같음