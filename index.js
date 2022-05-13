//백준에 업로드 시 readFileSync 안의 값을 '/dev/stdin'으로
//한줄에 입력시 split(' ')
//두줄에 입력 split('\n')
//배열입력 ->let numbers=input[0].split(' ').map(x=>parseInt(x));
//const str=input.join();//배열을 문자열로 변환
// console.log(String.fromCharCode(a)); //유니코드 문자로 변환
//console.log(str.charCodeAt(0)); //인덱스 번호에 해당하는 문자 유니코드 변환

let fs = require('fs');
let input = fs.readFileSync("example.txt").toString().split("\n");


function rec(n){
    if(n==0){
        return console.log(n,"hello")
    }
    console.log(n,"hello");
    return rec(n-1)
}

console.log(rec(3))







