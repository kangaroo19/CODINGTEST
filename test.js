let array=[0]

function f_mem(n){
    if(n<3) array[n]=1n
    if(!array[n]){
        array[n]=f_mem(n-1)+f_mem(n-2)
    }
    return array[n]
}

