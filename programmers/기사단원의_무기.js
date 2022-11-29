function solution(number, limit, power) {
    
    const arr=[]
    for(let i=1;i<=number;i++){
        let count=0
        for(let j=1;j<=Math.sqrt(i);j++){ //약수는 짝이 맞는다는 특징때문에 전체를 돌지 않음
            if(i%j===0){
                if(Math.sqrt(i)===j) count+=1
                else count+=2
            }
        }
        (count>limit)?arr.push(power):arr.push(count)
    }
    return arr.reduce((arr,cur)=>arr+cur)
}