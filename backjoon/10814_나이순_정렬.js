const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const array = input.map(v => v.split(' '));
const n=Number(array.shift())

// const array=[
//     [ '21', 'Junkyu' ],
//     [ '21', 'DoHyun' ],
//     [ '20', 'Sunyoung' ]
//   ]

array.sort((a,b)=>{
    if(a[0]!==b[0]){//나이가 다르면 오름차순 정렬
        return Number(a[0])-Number(b[0]) //음수 값 반환시(b[0]가 더 클때) 자리 바꿈
    }
})
let answer=""
for(let i=0;i<n;i++){
    answer+=array[i][0]+" "+array[i][1]+"\n"
    
}
console.log(answer)
