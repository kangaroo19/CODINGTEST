function solution(a, b, n) {
    let sum=0
    let div=0
    while(n>=a){ //몫과 나머지를 더한 값이 a보다 클동안
        div=n%a
        let hap=parseInt((n/a))*b
        sum+=hap
        n=parseInt(n/a)*b+div
    }
    return sum
}