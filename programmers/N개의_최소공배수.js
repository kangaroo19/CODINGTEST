function solution(arr) {
    const stack=[]
    let [a,b]=arr

    for(let i=2;i<arr.length+1;i++){
        let tmpA=a
        let tmpB=b
        let c=null
        while(1){
            c=a%b
            a=b
            b=c
            if(c===0) break
        }
        stack.push((tmpA/a)*(tmpB/a)*a)
        a=stack[stack.length-1]
        b=arr[i]
    }

    return stack[stack.length-1]
}