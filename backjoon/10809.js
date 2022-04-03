//백준에 업로드 시 readFileSync 안의 값을 '/dev/stdin'으로
//한줄에 입력시 split(' ')
//두줄에 입력 split('\n')
let input = require('fs').readFileSync('example.txt').toString().split(' ');

const str=input.join();//배열을 문자열로 변환
const array=[];
for(let i=97;i<123;i++){
    array.push(str.indexOf(String.fromCharCode(i)));
}

