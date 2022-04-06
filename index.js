//백준에 업로드 시 readFileSync 안의 값을 '/dev/stdin'으로
//한줄에 입력시 split(' ')
//두줄에 입력 split('\n')
//배열입력 ->let numbers=input[0].split(' ').map(x=>parseInt(x));
//const str=input.join();//배열을 문자열로 변환
// console.log(String.fromCharCode(a)); //유니코드 문자로 변환
//console.log(str.charCodeAt(0)); //인덱스 번호에 해당하는 문자 유니코드 변환

let fs = require('fs');
let input = fs.readFileSync("example.txt").toString().split("\n");
input[0] = input[0].split(" ");
const cards = input[1].split(" ").map((element) => Number(element));
const N = Number(input[0][0]); // N은 총 카드의 개수
const M = Number(input[0][1]); // M은 3개의 숫자의 합과 가장 가까운 목표 값
let answer = 0;

for(let i = 0; i < N; i++){
   for(let j = i+1; j < N; j++){
      for(let k = j+1; k < N; k++){
         const sum = cards[i] + cards[j] + cards[k];
         const gap = M - sum;
         if(gap >= 0 && answer <= sum){
            answer = sum;
         }
      }
   }
}
console.log(answer);







