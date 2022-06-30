let array=[0]
let count=0
function f_mem(n){
    if(n<3) array[n]=1
    if(!array[n]){
        count++
        array[n]=f_mem(n-1)+f_mem(n-2)
        console.log(array[n-1]+"+"+array[n-2]+"="+array[n])
    }
    return array[n]
}

console.log(f_mem(10),count)

function f(n){
    if(n<=2) return 1
    console.log(f(n-2),f(n-1))
    return f(n-2)+f(n-1)
}

console.log(f(6))