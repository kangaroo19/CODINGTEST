const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(x => +x));
const n=Number(nums[0].shift())
const k=Number(nums[0].shift())
const array=nums[1].splice(0,n)
let start=0
let end=0
let answer=-99999
let hap=0
while(end!==array.length-1){ 
    hap=0 //최대값 비교해야되니까 매번 0으로 초기화
    end=start+k-1
    for(let i=start;i<=end;i++){
        hap+=array[i]
        //console.log(hap)
    }
    if(answer<hap) answer=hap
    start++
}

console.log(answer)
//투포인터 사용 ->시간복잡도 O(n)