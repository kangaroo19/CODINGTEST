//집합 생성
let set1=new Set([1,2,3]) //Set(3) { 1, 2, 3 }
let set2=new Set('123') //Set(3) { '1', '2', '3' }
//-----------------------------------------------------

//삽입,삭제
let set3=new Set([1,2,3])
set3.add(3) //{1,2,3}
set3.add(4) //{1,2,3,4}
set3.delete(4) //return true
set3.delete(4) //return false
//-----------------------------------------------------

//포함 여부 확인
let set4=new Set([1,2,3])
set4.has(1) //true
set4.has(4) //false
//-----------------------------------------------------


//교집합
function interSectSets(setA,setB){
    let interSection=new Set()
    setB.forEach(e=>{
        if(setA.has(e)) interSection.add(e)
    })
    return interSection
}
let set5=new Set([1,2,3])
let set6=new Set([2,3,4,5])
console.log(interSectSets(set5,set6)) //Set(2) { 2, 3 }
//-----------------------------------------------------

//교집합
function unionSet(setA,setB){
    let union=new Set(setA)
    setB.forEach(e=>{
        union.add(e)
    })
    return union
}

console.log(unionSet(set5,set6)) //Set(5) { 1, 2, 3, 4, 5 }
//-----------------------------------------------------


//차집합
function differenceSet(setA,setB){
    let difference=new Set(setA)
    setB.forEach(e=>{
        if(setA.has(e)) difference.delete(e)
    })
    return difference
}

console.log(differenceSet(set5,set6)) //Set(1) { 1 }
console.log(differenceSet(set6,set5)) //Set(2) { 4, 5 }
//-----------------------------------------------------
