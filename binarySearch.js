const sample=[1,3,4,5,2,6,8,9,7]
sample.sort((a,b)=>a-b)

function binarySearch(array,target,left,right){
    let mid=0
    while(left<=right){
        mid=Math.floor((left+right)/2)
        if(array[mid]===target) return mid

        if(array[mid]>target) right=mid-1
        else left=mid+1
    }
}

const result=binarySearch(sample,3,0,sample.length-1)

console.log(result)