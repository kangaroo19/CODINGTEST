const n=4
const lost=[3,2]
const reserve=[1,4]
const arr1=Array(n).fill(1)
for(let i=0;i<lost.length;i++){
    arr1[lost[i]-1]--
}
for(let i=0;i<reserve.length;i++){
    arr1[reserve[i]-1]++
}
for(let i=0;i<n;i++){
    if(arr1[i]===0 && arr1[i-1]===2){
        arr1[i]=1
        arr1[i-1]=1
    }
    else if(arr1[i]===0 && arr1[i+1]===2){
        arr1[i]=1
        arr1[i+1]=1
    }
}

return arr1.filter((v,_)=>v>=1).length



function solution(n, lost, reserve) {
    const arr1=Array(n).fill(1)
    lost.sort((a,b)=>a-b)
    for(let i=0;i<lost.length;i++){
        arr1[lost[i]-1]--
    }
    for(let i=0;i<reserve.length;i++){
        arr1[reserve[i]-1]++
    }
    const arr2=arr1.slice()

    for(let i=0;i<arr1.length-1;i++){
        if(arr1[i]===2 && arr1[i+1]===0){
            --arr1[i]
            ++arr1[i+1]
        }
    }
    
    for(let i=1;i<arr2.length;i++){
        if(arr2[i]===2 && arr2[i-1]===0){
            --arr2[i]
            ++arr2[i-1]
        }
    }
    return Math.max(arr1.filter((v,_)=>v>=1).length,arr2.filter((v,_)=>v>=1).length)
}