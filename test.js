const n=15
const arr=[]
for(let i=1;i<=n;i++) arr[i-1]=i
let start=0
let end=0
let count=0
while(start<arr.length){
    let sum=0
    for(let i=start;i<=end;i++){
        sum+=arr[i]
    }
    if(sum<n) end++
    else if(sum>n) start++
    else{
        start++
        count++
    }
}

console.log(count)