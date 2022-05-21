const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(x => +x));
const n=nums.shift()
const hap=nums.pop()
//const array=nums.splice(0,n)
//console.log(array)
const array=[5,12,7,10,9,1,2,3,11]
array.sort((a,b)=>{
    if(a+b===hap){
        console.log("123")
    }
})
console.log(array)