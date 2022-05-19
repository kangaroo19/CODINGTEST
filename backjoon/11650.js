const fs = require('fs');
const input = fs.readFileSync("example.txt").toString().trim().split("\n").map(v=>v.trim()); 
const N = +input.shift()
const array = input.map(v=>v.split(' ').map(x=>+x))
//sort함수는 nlogn
array.sort((a,b)=>{
  if(a[0]!==b[0]) return a[0]-b[0]//x좌표 y좌표가 서로 다르면 x좌표값을 기준으로 정렬
  else return a[1]-b[1] //x좌표 y좌표가 서로 같으면 y좌표를 기준으로 정렬
})

let answer=""

for(let i of array){
  answer+=i[0]+" "+i[1]+"\n"
}

console.log(answer)
//console.log는 한번만 하는게 실행시간 줄일수 있다