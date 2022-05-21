const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' '));
const n=Number(input[0])
//const array=input.splice(0,input.length)
const array=[
    [ '21', 'Junkyu' ],
    [ '21', 'DoHyun' ],
    [ '20', 'Sunyoung' ]
  ]

//array.sort()
array.sort((a,b)=>{
    if(a[0]!==b[0]){
        return Number(a[0])-Number(b[0])
    }
    else if()
})
console.log(array.join("\n"))
