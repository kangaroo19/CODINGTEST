const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split(' ');
console.log(input)
const array=[]
for(let i=0;i<input.length;i++){
    array.push(input[i].split('').reverse().join(''))
}

console.log(array)