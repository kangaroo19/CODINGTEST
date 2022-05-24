const input = require('fs').readFileSync('example.txt').toString().trim().split(" ");
const n=Number(input)
let left=1
let right=n;
while(1){
    let mid=Math.floor((left+right)/2)
    if(mid**2===n){
        console.log(mid)
        break
    }
    else if(mid**2>n) right=mid-1
    else left=mid+1
}
