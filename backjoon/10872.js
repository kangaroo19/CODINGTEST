let input = require('fs').readFileSync('example.txt').toString().trim().split(' ');
const n=Number(input[0])
function f(n){
    if(n==1){
        return 1
    }
    return n*f(n-1)
}

console.log(f(n))