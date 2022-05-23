const input = require('fs').readFileSync('example.txt').toString().trim().split(" ");
const n=Number(input)
const array=[]
// for(let i=1;i<=n;i++){
//     if(n%i==0) array.push(i)
// }
// for(let i of array){
//     if(i*i==n) console.log(i)
// }
//시간초과
//--------------------------------------
// for(let i=1;i<=n;i++) if(n%i==0) array.push(i)
// let mid=Math.floor((array.length)/2)
// console.log(array[mid])
//시간초과
//-----------------------------------------
let left=0
let right=n;
function a(n){
    while(left<=right){
        let mid=Math.floor((left+right)/2)
        if(mid**2<=n) left=mid+1
        else right=mid-1
        if(mid**2==n)  return mid
    }  
}

console.log(a(n))