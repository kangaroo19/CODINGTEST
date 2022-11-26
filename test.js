const arr=['abcd','bbb','cccc','aa']
arr.sort((a,b)=>{
    if(a[1]<b[1]) return -1
    else return 0
})

console.log(arr)