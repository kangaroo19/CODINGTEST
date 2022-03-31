//백준에 업로드 시 readFileSync 안의 값을 '/dev/stdin'으로
//한줄에 입력시 split(' ')
//두줄에 입력 split('\n')
let input = require('fs').readFileSync('example.txt').toString().split(' ');

//배열입력 ->let numbers=input[0].split(' ').map(x=>parseInt(x));
const str=input.join();//배열을 문자열로 변환
let answer=[];
for(let i=0;i<26;i++){  //26(알파벳개수)크기의 answer배열을 0으로 채움
    answer[i]=0;
}

for(let i=97;i<=122;i++){
    for(let j=97;j<=122;j++){
        if(str.charCodeAt(j-97)==i){ //charcodeat=>str(입력)문자열의 인덱스 값에 대한 유니코드 반환
            answer[i-97]++;
        }
    }
}
for(let i=0;i<26;i++){  //26(알파벳개수)크기의 answer배열을 0으로 채움
    if(answer[i]==0){
        answer[i]=-1;
    }
}
console.log(answer);




