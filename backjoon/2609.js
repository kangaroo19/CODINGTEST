const input = require('fs').readFileSync('example.txt').toString().split(' ');
let a=parseInt(input[0]);
let b=parseInt(input[1]);
let c=0;

while(1){
    c=a%b;
    a=b;
    b=c;
    if(c==0)break;
}

//a->최대공약수
console.log(a);
console.log((parseInt(input[0])/a)*(parseInt(input[1])/a)*a);
//유클리드 호제법 사용


