
function solution1(n) {
    const AntExp = /(.)\1*/g;
    let start = '1'; 
    
    for (let i = 1; i <n; i++) {
        let str = ''; 
        const result = start.match(AntExp);
        console.log(result)
        for (item of result) {
            str += item[0]+String(item.length); 
        }
        start = str;
        console.log(str)
    }
    return start
}

//console.log(solution1(5))

const testExp=/(\d)\1*/g
const start='112232322222'
const result=start.match(testExp)

//console.log(result)


function solution2(n){
    const a='4'
    const b='13'
    const array1=[]
    const array2=[]
    let answer=0
    let cnt=0
    while(cnt<=n){
        let num=array1.splice(0,1)
        //console.log('num '+num)
        array1.push(parseInt(num+a))
        array1.push(parseInt(num+b))
        //console.log(array1)
        array2.push(num)
        //console.log(array2)
        cnt++
    }
    return array2.sort((a,b)=>a-b)
}
//solution2(1000)

