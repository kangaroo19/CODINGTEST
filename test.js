const t="3141592"
const p='271'
let count=0
for(let i=0;i<t.length-p.length+1;i++){
    let subStr=t.substring(i,i+p.length)
    if(Number(p)>=Number(subStr)) count++
}

console.log(count)