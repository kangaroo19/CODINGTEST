const array=[
    ['hat','headgear'],
    ['sunglasses','eyewear'],
    ['turban','headgear']
]

let map=new Map(array)
console.log(map)
let answer=[]

for(let i of array){
    if(!map.has(i[1])) answer.push(i[0]) 
}

console.log(answer)