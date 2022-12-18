let dart='1D2S#10S'
const stack=[]
//
const arr=[]
dart.match(/(\d+\D[\#\*]?)/gi).map(v=>arr.push(v.replace(/S/g,'1').replace(/D/g,'2').replace(/T/g,'3')))

//console.log(test.match(/d/gi))

//const arr=dart.match(/(\d+\D[\#\*]?)/gi)
//console.log(dart.match(/(\d+\d[\#\*]?)/gi))
console.log(arr)
arr.forEach((v,_)=>{
    if(v.includes('*')){

    }
    else if(v.includes('#')){

    }
    else{
        
    }
})

// console.log(stack)
// console.log(stack.reduce((acc,cur)=>acc+cur))
