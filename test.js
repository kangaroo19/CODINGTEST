const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' '));
const array=[]

if(nums[0]!==undefined) for(let i=0;i<nums[0].length;i++) array.push(nums[0][i].substring(0,2))

if(nums[1]!==undefined) for(let i=0;i<nums[1].length;i++) array.push(nums[1][i].substring(0,2))



// const array=['Cc','Pt','Pt','Re','Tb','Re','Cm','Cm','Re' ,'Pt','Pt','Re','Ea','Ea','Pt','Pt'
// ,'Pt','Re','Re','Cb','Cb','Pt','Pt','Cb']
const question=['Re','Pt','Cc','Ea','Tb','Cm','Ex']
let map=new Map()
for(let i=0;i<array.length;i++){
    if(!map.has(array[i])) map.set(array[i],1)
    else map.set(array[i],map.get(array[i])+1)
}
for(let i=0;i<question.length;i++){
    if(!map.has(question[i])) map.set(question[i],0)
}

let array2=[]
map.forEach((value,key)=>{
    array2.push([key,value])
})
let answer=[]
for(let i=0;i<array2.length;i++){
    let num=(array2[i][1]/array.length).toFixed(2)
    if(array2[i][0]==='Re') answer[0]=array2[i][0]+' '+array2[i][1]+' '+num
    else if(array2[i][0]==='Pt') answer[1]=array2[i][0]+' '+array2[i][1]+' '+num
    else if(array2[i][0]==='Cc') answer[2]=array2[i][0]+' '+array2[i][1]+' '+num
    else if(array2[i][0]==='Ea') answer[3]=array2[i][0]+' '+array2[i][1]+' '+num
    else if(array2[i][0]==='Tb') answer[4]=array2[i][0]+' '+array2[i][1]+' '+num
    else if(array2[i][0]==='Cm') answer[5]=array2[i][0]+' '+array2[i][1]+' '+num
    else if(array2[i][0]==='Ex') answer[6]=array2[i][0]+' '+array2[i][1]+' '+num
}

if(array[0]===''){
    answer[7]='Total '+0+' 1.00'
}
else{
    answer[7]='Total '+array.length+' 1.00'
}
console.log(answer.join("\n"))
