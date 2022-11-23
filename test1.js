// const arr=[10,2,2,3,3,4,4]
// let map=new Map()


// for(let i=0;i<arr.length;i++){
//     if(!map.has(arr[i])) map.set(arr[i],1)
//     else map.set(arr[i],map.get(arr[i])+1)
// }

// for(const [key,value] of map){
//     if(value===1) console.log(key)
// }
// map.set([1,2],2)
// console.log(map)

const arr=[[1,2],[3,5],[1,4],[2,3]]
arr.sort((a,b)=>{
    if(a[0]===b[0]) return a[1]-b[1]
    else a[0]-b[0]
})

const answer=[]
for(let i=0;i<4;i++){
    for(let j=0;j<4;j++){
        if(arr[i][1]===arr[j][0]){
            answer.push([arr[i][0],arr[i][1],arr[j][1]])
        }
    } 
}
const array1=[]
console.log(answer)
for(let i=0;i<answer.length;i++){
    for(let j=0;j<3;j++){
        array1.push(answer[i][j])
    }
}

const set=new Set(array1)
console.log(set)
const array=[...set]
console.log(array)
const bb=[1,2,3,4,5]
for(let i=0;i<5;i++){

}
