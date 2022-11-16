// s='AWAWSSG'
// function getFinalString(s){
//     const stack=[]
//     for(let i=0;i<s.length;i++){
//         stack.push(s[i])
//         if(stack.length>=3 
//             && stack[stack.length-1]==='S' 
//             && stack[stack.length-2]==='W' 
//             && stack[stack.length-3]==='A'){
//             stack.pop()
//             stack.pop()
//             stack.pop()
//         }
//     }
//     return (!stack.length)?-1:stack.join("")
// }

// console.log(getFinalString(s))




// const arr=[100]
// const answer=[]
// const k=4
// for(let i=0;i<arr.length;i++){
//     //if(arr[i]>=k) continue
//     for(let j=arr.length;j>i;j--){
//         // console.log(arr.slice(i,j))
//         let sum=arr.slice(i,j).reduce((acc,cur)=>acc+cur)
//         let len=arr.slice(i,j).length
//         if(sum<=k){
//             answer.push(len)
//         } 
//     }   
// }

// console.log(Math.max(...answer))

//input:
//123512
//909

const num='122'
let maxNum=num
let minNum=num
let index=null
for(let i=0;i<num.length;i++){
    if(num[i]!=='9'){
        let r=new RegExp(num[i],'g')
        maxNum=num.replace(r,'9')
        break;
    }
}

for(let i=0;i<num.length;i++){
    // if(num[0]==='1'){  //첫번째 요소가 1이면 continue
        
    // }
    // if(num[i]==='0'){   //0을 만나면 continue
        
    // }
    if(num[i]!=='1'){
        let r=new RegExp(num[i],'g')
        if(i===0) minNum=num.replace(r,'1')
        else minNum=num.replace(r,'0')
        break;
    }
    
}
console.log(maxNum,minNum)
console.log(parseInt(maxNum)-parseInt(minNum))


