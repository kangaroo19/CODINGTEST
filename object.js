let Person={
    name:'Hanamon',
    age:20,
    intro:function(){//화살표함수로 했는데 안됨,
        //화살표함수에는 this가 없다함
        return "I m "+this.name
    }
};

//키->name,age
//값->Hanamon,20
//console.log(Person.name,Person.age)//Hanamon 20
//console.log(Person.intro())//I m Hanamon

//객체 프로퍼티 추가

Person.height=172
Person.weigth=70
Person.money="many"
Person.handsome=true

//객체 프로퍼티 삭제
delete Person.money

//객체 프로퍼티 수정
Person.handsome=false

//console.log(Person)
//{
//     name: 'Hanamon',
//     age: 20,
//     intro: [Function: intro],
//     height: 172,
//     weigth: 70,
//     handsome: false
//   }


//특정 프로퍼티 조회
//console.log("name" in Person) //true
//console.log("money" in Person) //false

//모든 프로퍼티 조회
for(let i in Person){
    console.log(i)
}
// name
// age
// intro
// height
// weigth
// handsome

//생성자 함수로 생성가능
let animal =new Object()
animal.cat="meow"
animal.dog="woof"
animal.cow="moo"

