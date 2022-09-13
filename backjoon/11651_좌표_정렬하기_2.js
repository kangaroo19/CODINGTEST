const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(v=>v.trim()); 
const n = +input.shift()
const array = input.map(v=>v.split(' ').map(x=>+x))
array.sort((a,b)=>{
    if(a[1]!==b[1]) return a[1]-b[1]
    else return  a[0]-b[0]
})

let answer=""
for(let i=0;i<n;i++){
    answer+=array[i][0]+" "+array[i][1]+"\n"
}
console.log(answer)