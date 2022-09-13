const fs=require("fs")
const input = fs.readFileSync('example.txt').toString().trim().split('\n');
const n=Number(input[0])
const array=input.splice(1,input.length)

//const array=['but','i','wont','hesitate','no','more','no','more','it','cannot','wait','im','yours']
array.sort() //일단 사전 순 정렬

array.sort((a,b)=>{ //길이 기준으로 b의 길이가 더 길면 -1리턴 (a,b위치 바꿈)
    if(a.length<b.length) return -1
})

const answer=[]
for(let i=0;i<n;i++){
    if(array[i]===array[i+1])continue //같은 문자열이면 거름
    answer.push(array[i])
}

console.log(answer.join("\n"))

//백준 채점환경은 리눅스인데 리눅스는 배열에 \r이 안붙으니 신경안써도 될듯
//9행 비교함수에 쓸데없는 sort함수 하나 더 있엇는데 
//메모리초과 나왔음 지우니까 해결