let input = require('fs').readFileSync('example.txt').toString().split(' ');
const array1=[];
const array2=[];
for(let i=0;i<3;i++){
    array1.push(parseInt(input[0][i]));
    array2.push(parseInt(input[1][i]));
}
function reverse(array){
    answer=array.reverse();
    return answer[0]*100+answer[1]*10+answer[2];
}
console.log(reverse(array1)>reverse(array2)?reverse(array1):reverse(array2));






