const fs=require('fs');
const n=fs.readFileSync("example.txt").toString().trim().split('\n').map(v=>+v);

function f(n){
    if(n<=2) return 1
    return f(n-2)+f(n-1)
}

let fiboArr=[0]
let count=0
function fiboWithMemoization(n){
    if(n<3) fiboArr[n]=1
    if(!fiboArr[n]){//내가 저장한 값 중 없다면
        count++
        fiboArr[n]=fiboWithMemoization(n-1)+fiboWithMemoization(n-2)
    }
    return count

}
console.log(f(n),fiboWithMemoization(n))