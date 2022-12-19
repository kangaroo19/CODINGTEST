let dart='1S*2T*3S'
const stack=[]
//.map(v=>arr.push(v.replace(/S/g,'1').replace(/D/g,'2').replace(/T/g,'3')))

//const arr=[]
const arr=dart.match(/(\d+\D[\#\*]?)/gi)
//console.log(test.match(/d/gi))

//const arr=dart.match(/(\d+\D[\#\*]?)/gi)
//console.log(dart.match(/(\d+\d[\#\*]?)/gi))
console.log(arr)
const regex=new RegExp(/[0-9]/)

arr.forEach((v,_)=>{
    let score=v.match(/(\d{1,})/gi).join('')
    v=v.replace(/(\d{1,})/gi,"").replace(/S/g,'1').replace(/D/g,'2').replace(/T/g,'3')
    if(v.includes('#')){
        stack.push(Math.pow(score,v[0])*-1)
    }
    else if(v.includes('*')){
        stack.push(Math.pow(score,v[0]))
        stack[stack.length-1]*=2
        stack[stack.length-2]*=2
        //첫번째 트라이 에서 * 가 나왔을때(배열의 크기 1)
        //stack.length-2 는 '-1': NaN 으로 들어가고 
        //마지막 reduce에서 NaN은 계산 안함
    }
    else{
        stack.push(Math.pow(score,v[0]))
    }
})

console.log(stack)
console.log(stack.reduce((acc,cur)=>{
    console.log(acc,cur)
    return acc+cur
}))

