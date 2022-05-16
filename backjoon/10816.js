let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().trim().split('\n'); 
const n = parseInt(input.shift())
const array = input.shift().split(' ').map(v=>+v);
const m = parseInt(input.shift()) 
const target = input.shift().split(' ').map(v=>+v);

array.sort((a,b)=>a-b)
function f(num,array){
    let count=0;
    let left=0
    let right=array.length-1
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        let midValue=array[mid]
        if(num==midValue){
            if(midValue==array[mid+1]||midValue==array[mid-1]){
                while(midValue==array[++mid]){
                    count++
                }
                mid=Math.floor((left+right)/2)
                while(midValue==array[--mid]){
                    count++
                }
            }
            count++;
            return count;
        }
        else if(num>=midValue)left=mid+1
        else right=mid-1
    }
    return 0
}

const answer=[]
for(let i of target){
    answer.push(f(i,array))
}
console.log(answer.join(" "))

//시간초과나옴