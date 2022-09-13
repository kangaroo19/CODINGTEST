const fs=require('fs');
const input=fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(x => +x));
const n=Number(nums[0].shift())
const array=nums[1].splice(0,n)
let answer=0
let hap=0
array.sort((a,b)=>a-b)

for(let i=0;i<n;i++){
    hap+=array[i]*(n-i)
}
console.log(hap)
//오름차순 정렬 후
//ex) array=[1,2,3,3,4]
//1
//1 2
//1 2 3
//1 2 3 3
//1 2 3 3 4
//=>(첫번째요소*n) + (두번째 요소*n-1) + .... +(마지막요소 * 1)