const input = require('fs').readFileSync('example.txt').toString().split('\n');
const inputNumber=parseInt(input[0]);
// let count=0;
// let n=0;
let countGroupWord=0;
for(let i=1;i<=inputNumber;i++){
    const word=input[i];
    const letter=[];
    let isGroupWord=true;
    for(let j=0;j<word.length;j++){
        if(letter.indexOf(word[j])===-1){
            letter.push(word[j]);
        }else{
            if(letter.indexOf(word[j])!==letter.length-1){
                isGroupWord=false;
                break;
            }
        }
    }
    if(isGroupWord){
        countGroupWord++;
    }
}

console.log(countGroupWord)
// for(let k=1;k<=inputNumber;k++){
// for(let i=0;i<input[k].length;i++){
//     if(input[k][i]==input[k][i+1]){
//         n=i;
//         break;
//     }
// }
// for(let i=n+1;i<input[k].length;i++){
//     if(input[k][n]==input[k][i]){
//         count++;
//         break;
//     }
// }
// }
// console.log(inputNumber-count);
