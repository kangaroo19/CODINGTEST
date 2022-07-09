const array=[5,4,3,2,1]
const start=1
const end=3

let startSum=0
let endSum=0
for(let i=0;i<=end;i++){
    endSum+=array[i]
}

for(let i=0;i<=start-1;i++){
    startSum+=array[i]
}

console.log(endSum-startSum)