const input = require('fs').readFileSync('example.txt').toString().trim().split(" ").map(v=>BigInt(v));
const n=input.pop()

function sqrt(value) {
    if (value < 0n) {
        throw 'square root of negative numbers is not supported'
    }

    if (value < 2n) {
        return value;
    }

    function newtonIteration(n, x0) {
        const x1 = ((n / x0) + x0) >> 1n;
        if (x0 === x1 || x0 === (x1 - 1n)) {
            return x0;
        }
        return newtonIteration(n, x1);
    }

    return newtonIteration(value, 1n);
}

console.log(sqrt(n).toString())

//bigint사용안해서 오류남
//근데 bigint로는 math.sqrt사용못함
//인터넷에서 직접구현하는 코드 가져옴 
//이분탐색으로도 안됨