
function solution(n) {
    const arr=[]
    for(let i=1;i<=n;i++) arr[i-1]=i
    let start=0
    let end=0
    let count=0
    while(start<arr.length){
        let sum=0
        for(let i=start;i<=end;i++){
            sum+=arr[i]
            if(sum>n) break;
        }
        if(sum<n) end++
        else if(sum>n) start++
        else{
            start++
            count++
        }
    }
    return count
}

//투포인터 사용
//누적합이 n보다 크거나 같으면 start 증가
//누적합이 n보다 작으면 end 증가



