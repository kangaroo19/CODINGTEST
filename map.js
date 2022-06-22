const { maxHeaderSize } = require("http")

let jaehyun=new Map()

//set으로 맵 객체에 삽입
jaehyun.set("id",201807565)
jaehyun.set("name","jaehyun")
jaehyun.set("major","computer")
jaehyun.set("age",24)

console.log(jaehyun)
//안의 인자는 키값
jaehyun.get("id") //201807565
jaehyun.delete("age") //삭제 성공 시 true반환
jaehyun.clear() //맵 안의 프로퍼티 전부 삭제

//2차원 배열로 넘겨주는것도 가능
let michael=new Map([
    ["id",0],
    ["name","michael"],
    ["major","english"],
    ["age",23]
])

//맵 객체는 문자열 아닌 값도 키로 사용가능하다
const errorMessageObj={
    404:"no page",
    500:"server error"
}

const errorMessageMap=new Map([
    [404,"no page"],
    [500,"server error"]
])

//console.log(errorMessageObj.404) 오류
//console.log(errorMessageObj["404"]) no pages
//console.log(errorMessageMap.get(404)) no pages

//객체는 문자열을 통해서만 조회가능하고 .뒤에 숫자 입력시
//에러가 난다
//맵 객체에서는 get메소드의 인자로 숫자를 넘겨줘도 괜찮음


const maxInfoMap = new Map([
    ["name", "김맥스"],
    ["age", 25],
    ["major", "영문학"],
])

//console.log(maxInfoMap.entries())
//[Map Entries] { [ 'name', '김맥스' ], [ 'age', 25 ], [ 'major', '영문학' ] }

for(const [key,value] of maxInfoMap){
    //console.log(key,value)
}
//name 김맥스
// age 25
// major 영문학

//객체는 for...in문 으로 순회
//맵은 for...of문으로 순회

console.log(maxInfoMap.keys())
console.log(maxInfoMap.values())