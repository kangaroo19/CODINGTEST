let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim().split('\n'); 
const n = parseInt(input.shift())
const array = input.shift().split(' ').map(v=>+v);
const m = parseInt(input.shift()) 
const target = input.shift().split(' ').map(v=>+v);

array.sort((a,b)=>a-b)
console.log(array,target)
function f(num,array){
    let left=0
    let right=array.length-1
   //console.log(left,right)
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        let midValue=array[mid]
        if(num==midValue)return 1
        else if(num>=midValue)left=mid+1
        else right=mid-1
    }
    return 0
}
const answer=[]
for(let i of target){
    answer.push(f(i,array))
}
console.log(answer.join("\n"))

