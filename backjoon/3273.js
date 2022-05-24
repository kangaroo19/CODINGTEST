const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(x => +x));
const n=Number(nums.shift())
const hap=Number(nums.pop())
const array=nums[0].splice(0,n)
//const array=[5,12,7,10,9,1,2,3,11]
array.sort((a,b)=>a-b)//오름차순 정렬
let start=0//시작점
let end=array.length-1//끝점
let count=0
while(start!==end){
    let value=array[start]+array[end]
    if(value<hap) start++ //시작점과 끝점을 더한값이 hap보다 작으면 start 1증가
    else if(value>hap) end--//시작점과 끝점을 더한값이 hap보다 크거나 같으면(같을때는 count++ 추가)end 1감소
    else{
        end--
        count++
    }
}

console.log(count)

//투포인터 알고리즘 사용

