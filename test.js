console.log(a) //호이스팅 발생

var a=2
console.log(a)

for(var i=0;i<6;i++){
    console.log(i)
}

console.log(i)



function print(){
    var s=111
    console.log(s)
}

print()
console.log(s)