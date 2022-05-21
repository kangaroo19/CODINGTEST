const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const array = input.map(v => v.split(' '));
const n=Number(array.shift())

// const array=[
//     [ '21', 'Junkyu' ],
//     [ '21', 'DoHyun' ],
//     [ '20', 'Sunyoung' ]
//   ]

array.sort((a,b)=>{
    if(a[0]!==b[0]){
        return Number(a[0])-Number(b[0])
    }
    
})
let answer=""
for(let i=0;i<n;i++){
    answer+=array[i][0]+" "+array[i][1]+"\n"
    
}
console.log(answer)
