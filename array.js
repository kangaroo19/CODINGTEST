const names=['haley','alex','luke']
const [first,second]=names


//names라는 배열의 첫번째 두번째 요소를 각각 
//first,second라는 변수에 담는다는 뜻

//console.log(first,second) //=> haley alex




const flowers=['rose','tulip','sunflower','iris']

const [a,...b]=flowers
//첫번째 요소를 제외한 나머지 요소만 b에 저장
//console.log(b) //=>[ 'tulip', 'sunflower', 'iris' ]
//console.log(a) //=>rose

const array1=[1,2,3]
//console.log(array1.includes(2))

//include -> 배열안에 인자값 있는지 확인 (true or false)

const arr1=[1,2,3]
const arr2=[4,5,6]

const arr3=[...arr1,...arr2]
//console.log(arr3)




//split('')와 split(' ')의 차이점
//전자는 하나하나 떼서 배열에 저장
//후자는 ' '(빈칸)을 기준으로 나눠서 저장
const arr5='123 456'

console.log(arr5.split('')) //['1', '2', '3',' ', '4', '5','6']
console.log(arr5.split(' ')) //['123','456']

const arr6=[11,22,33,44,55]

for(let i in arr6){
    console.log(i)
}
//0 1 2 3 4 => for..in은 인덱스 출력

for(let i of arr6){
    console.log(i)
}
//11 22 33 44 55 => for..of는 값 출력

