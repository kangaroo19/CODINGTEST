const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(x => +x));

const n=Number(nums[0].shift())
const array=nums[1].splice(0,n)

array.sort((a,b)=>a-b)
console.log(array)
let hap=0;
let answer=0;
for(let i=n;i>0;i--){
    for(let j=0;j<n-i+1;j++){
        hap+=array[j]
        console.log(array[j])
    }
    console.log(hap)
    console.log("---------------")
    answer+=hap
}
console.log(answer)