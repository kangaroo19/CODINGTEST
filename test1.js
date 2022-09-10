const a=[1,2,3]
const b=[6,5,4]
const c=[]
const d=[]
a.filter((number,index,src)=>{
    if(index<2)
    c.push(number)
})
b.filter((number,index,src)=>{
    if(index<2)
    d.push(number)

})

console.log(c.join("")+d.reverse().join(""))