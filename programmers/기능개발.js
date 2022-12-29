function solution(progresses, speeds) {
    const arr=[]
    for(let i=0;i<progresses.length;i++){
  let num=100-progresses[i]
  arr.push((num%speeds[i]===0)?parseInt(num/speeds[i]):parseInt(num/speeds[i])+1)
}
let stack=[arr.shift()]
const answer=[]

let count=1
console.log(arr)
while(arr.length){
  let tmp=stack[0]
  if(tmp>=arr[0]){
    count++
    arr.shift()
  }
  else{
    answer.push(count)
    stack.pop()
    stack.push(arr.shift())
    count=1
  }
}
answer.push(count)
    return answer
}

//다른 사람의 풀이
function solution(progresses,speeds){
    let answer=[0]
    let days=progresses.map((v,i)=>Math.ceil((100-v)/speeds[i]))
    let maxDay=days[0]
    for(let i=0,j=0;i<days.length;i++){
      if(days[i]<=maxDay){
        answer[j]+=1
      }
      else{
        maxDay=days[i]
        answer[++j]=1
      }
    }
    return answer
  }
  
  console.log(solution(progresses,speeds))
  
  //Math.ceil ==> 소수점 올림
