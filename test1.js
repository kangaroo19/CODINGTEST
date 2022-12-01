function solution1(n){
    const regExp=/(.)\1*/g
    let start='1'
    for(let i=1;i<n;i++){
        let str=''
        result=start.match(regExp)
        for(let item of result){
            str+=item[0]+String(item.length)
        }
        start=str
    }
    return start
}

console.log(solution1(5))

function solution2(n){
    const a='4'
    const b='13'
    const arr1=[]
    const arr2=[]
    for(let i=0;i<n;i++){
        let num=arr1.splice(0,1)
        arr1.push(num+a)
        arr1.push(num+b)
        arr2.push(num)
    }
    return arr2
}

console.log(solution2(20).sort((a,b)=>a-b)[10].join(''))

console.log(undefined==[])