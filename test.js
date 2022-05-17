//O(1)
function O_1_algorithm(arr,index){
    return arr[index]
}

let arr=[1,2,3,4,5];
let index=1;
let result=O_1_algorithm(arr,index);
console.log(result);

//O(n)
function O_n_algorithm(n){
    for(let i=0;i<n;i++){

    }
}

//O(n^2)
function O_quadratic_algorithm(n){
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){}
    }
}

//O(2^n)
function fibonacci(n){
    if(n<=1){
        return 1
    }
    return fibonacci(n-1)+fibonacci(n-2)
}

const a=fibonacci(40)
console.log(a)

