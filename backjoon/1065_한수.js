const input = require('fs').readFileSync('example.txt').toString().trim().split('');
let N=parseInt(input.join(""));
const answer=[];




let hansu=0;
let i=0;
while(N>0){
    answer[i]=parseInt(N%10);
    N=parseInt(N/10);
    i++;
}

console.log(answer.reverse());
answer.reverse();
const count=[];
for(let i=0;i<answer.length-1;i++){
    const a=answer[i]-answer[i+1];
    count.push(a);
}
console.log(count);
let hanSu=0;
for(let i=0;i<count.length;i++){
    if(count[i]==count[i+1]){
        hansu++;
    } 
}
console.log(hansu);



// let hansu=0;
// const cha=[];
// for(let i=1;i<=99;i++){
//     while(i>0){
//         answer.push(parseInt(i%10));
//         i=parseInt(i/10);
//     }
//     answer.reverse();
//     for(let k=0;k<answer.length-1;k++){
//         cha.push(answer[k]-answer[k+1]);
//     }
//     for(let l=0;l<cha.length;l++){
//         if(cha[l]==cha[l+1]){
//             hansu++;
//         }
//     }
// }

// console.log(hansu);
