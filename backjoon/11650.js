const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(x => +x));

const n=input[0]
const array=nums.splice(1,nums.length-1)
let temp=0;

for(let i=0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
        if(array[i]>=array[j]){
            temp=array[i]
            array[i]=array[j]
            array[j]=temp
        }
    }
}
for(let i=0;i<array.length;i++){
    console.log(array[i][0]+" "+array[i][1])
}
//시간초과 병합정렬 사용해야된다함