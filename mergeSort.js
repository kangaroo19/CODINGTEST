
const mergeSort=function(array){
    if(array.length==1) return array
    let mid=Math.floor(array.length/2);
    let left=array.slice(0,mid);
    let right=array.slice(mid,array.length)
    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
    let result=[]
    while(left.length&&right.length){
        if(left[0]<=right[0]){
            result.push(left.shift());
        }
        else{
            result.push(right.shift())
        }
    }
    while(left.length) result.push(left.shift())
    while(right.length) result.push(right.shift())
    return result
}
const arr=[5,2,4,7,6,1,3,8]

console.log(mergeSort(arr))