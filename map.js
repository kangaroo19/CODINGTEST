let max=new Map()
max.set("id",0)
max.set("name","michael")
max.set("major","computer")
max.set("age",24)

console.log(max.get("michael"))

//console.log(max.get("name")) //michael
//console.log(max.delete("age")) //true
//console.log(max.has("id"))  //true
//console.log(max.size) //4
//max.clear() 모두 삭제

console.log(max)
//
// Map(4) {
//     'id' => 0,
//     'name' => 'michael',
//     'major' => 'computer',
//     'age' => 24
//   }
let max2=new Map([ //이차원 배열로 넘겨주는 것도 가능
    ["id",0],
    ["name","michael"],
    ["major","computer"],
    ["age",24]
])

const errorMessageMap=new Map([
    [404,"no pages"],
    [500,"sever error"],
    [401,"no authorization"]  
])

//console.log(errorMessageMap.get(404)) //no pages

//-----------------------------------------
//순회
const maxInfoMap = new Map([
    ["name", "김맥스"],
    ["age", 25],
    ["major", "영문학"],
])

maxInfoMap.forEach((key)=>{
    console.log(key+" ")
})
// 김맥스 
// 25 
// 영문학 

maxInfoMap.forEach((key,value)=>{
    console.log(key+" "+value)
})
// 김맥스 name
// 25 age
// 영문학 major

// let mapIterator=maxInfoMap.entries()

// console.log(mapIterator.next())
// console.log(mapIterator.next())
// console.log(mapIterator.next())
// console.log(mapIterator.next())


// { value: [ 'name', '김맥스' ], done: false }
// { value: [ 'age', 25 ], done: false }
// { value: [ 'major', '영문학' ], done: false }
// { value: undefined, done: true }

const map=new Map()
map.set('name','Mommo')
map.set('age',"secret")

const mapIterator2=map.entries()
while(!mapIterator2.next().done){
    const [key,value]=mapIterator2.next().value
    console.log(key+"  "+value)
}