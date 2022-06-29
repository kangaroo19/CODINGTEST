const fs=require('fs');
const n=fs.readFileSync("example.txt").toString().trim().split('\n').map(v=>+v);
let fiboArr=[0]
let count=0
function f(n){
    count++
    if(n<2){
        //count++
        return 1
    }
    f(n-1)+f(n-2)
    return count
}

console.log(f(n)%1000000007)
