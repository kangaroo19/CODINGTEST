let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim().split('');

const answer=[]
for(let i=0;i<input.length;i++){
    let arr=input.slice(i)
    answer.push(arr)
}

answer.sort()
console.log(answer.map(v=>v.join("")).join("\n"))
