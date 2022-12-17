//비구조화 할당(구조 분해 할당)

//배열이나 객체 속성을 해체하여 개별 변수에 값을 담을 수 있는 
//자바스크립트 표현식을 말함
//장점:
// 배열,객체 내 값을 추출하는 코드가 매우 간단해짐
// 필요한 객체와 나머지 요소 분리가 매우 간단
// 기본값 지정 가능

// 비구조화 할당 전 코드
const fruit1=['Apple','Banana','Peach']
const Apple1=fruit1[0]
const Banana1=fruit1[1]
const Peach1=fruit1[2]

// 비구조화 할당 후 코드
const fruit2=['Apple','Banana','Peach']
const [Apple2,Banana2,Peach2]=fruit2

//기본값 지정
const fruit3=['Apple','Banana','Peach']
const [Apple3,Banana3,Peach3,pear='pear']=fruit3

