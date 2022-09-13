const fs=require('fs');
const nums=fs.readFileSync("example.txt").toString().trim().split('\n').map(v=>+v);
const t=nums.shift()

let cntZero=[]
let cntOne=[]

function f(n){ 
    if(cntZero[n]==undefined){//원래는 !cntZero이런식이었는데 오류나와서 undefined로 바꿈
        cntZero[n]=f(n-1)+f(n-2)
    }
    return cntZero[n]
}
function f_mems(n){
    if(n<3) cntOne[n]=1
    if(!cntOne[n]) cntOne[n]=f_mems(n-1)+f_mems(n-2)
    return cntOne[n]
} 

for(let i=0;i<t;i++){
    cntZero=[1,0,1]
    cntOne=[0]  
    if(nums[i]==0){
        console.log(f(nums[i]),0)
    }
    else{
        console.log(f(nums[i]),f_mems(nums[i]))
    }
}

//1을 센다는 것은 피보나치 수열 결과와 같음
//0을 센다는 것은 첫번째 수가 1 이라는 것만 다르고
//나머지는 일반 피보나치 수열과 동일
//ex) f(4)의 0의 개수->f(3)의 0의 개수 + f(2)의 0의 개수