const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split(' ').map(v=>+v);
let n=input[0]
let k=input[1]

const arr=[0,[1],[1,1],[1,2,1]]

for(let i=4;i<=n;i++){
    arr[i]=[]
    arr[i][0]=1
    arr[i][i-1]=1
    for(let j=0;j<i;j++){
        if(j===0 || j===i-1){
            continue
        }
        arr[i][j]=arr[i-1][j-1]+arr[i-1][j]
        
    }
}
console.log(arr[n][k-1])