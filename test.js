let set1=new Set([1,2,3,3,3,3])
let set2=new Set('123')
let set3=new Set()
set1.add(3)
set1.add(4)
//set1.delete(1)


function interSect(seta,setb){
    let interSection=new Set()
    setb.forEach(e=>{
        if(seta.has(e)) interSection.add(e)
    })
    return interSection
}

function unionSet(seta,setb){
    let union=new Set(seta)
    setb.forEach(e=>{
        union.add(e)
    })
    return union
}

let seta=new Set([1,2,3])
let setb=new Set([2,3,4,5])
//console.log(interSect(seta,setb))
console.log(typeof unionSet(seta,setb))