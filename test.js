const arr=['ye','ma','woo','aya']
let str='yeyeye'

for(let i=0;i<arr.length;i++){
    let answer=str.split(arr[i])
    str=answer.join(i)
    console.log(answer,str)
}
console.log(str)

