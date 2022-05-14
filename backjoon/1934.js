const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(x => +x));
const N=nums[0][0];
const array=[]
let c=0;
for(let i=1;i<N+1;i++){
    let a=nums[i][0]
    let b=nums[i][1]
    while(1){
        c=a%b;
        a=b;
        b=c;
        if(c==0)break;
    }
    array.push(((nums[i][0]/a)*(nums[i][1]/a))*a)
}
console.log(array.join("\n"))


// //a->최대공약수
// console.log((parseInt(input[0])/a)*(parseInt(input[1])/a)*a);
//유클리드 호제법 사용
//최소공배수는 input값 2개를 최대공약수(a)로 나눈 몫을 곱하고 곱한 값에다 a곱함
//2609번 문제랑 비슷