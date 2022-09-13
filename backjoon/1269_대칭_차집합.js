const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(x => +x));
const n=nums[0].shift()
const m=nums[0].shift()
const array1=nums[1].splice(0,n)
const array2=nums[2].splice(0,m)

let set1=new Set(array1)
let set2=new Set(array2)

function a(set1,set2){
    let difference=new Set(set1)
    set2.forEach(e=>{
        if(set1.has(e)) difference.delete(e)
    });
    return difference.size
}

console.log(a(set1,set2)+a(set2,set1))
