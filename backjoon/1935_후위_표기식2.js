const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const n=Number(input.shift())
const str=input.shift().trim()
const word=str.split("")//후위표기식 저장
const array=input //각 알파벳에 대응하는 값이 저장된 배열
const stack=[]

for(let i=0;i<word.length;i++){
    if('A'<=word[i] && word[i]<='Z'){
        word[i]=array[word[i].charCodeAt()-65].trim()
    }   //65를 빼는 이유는 A의 아스키코드가 65이기 때문에
        //각 위치에 대응하는 array의 값을 word에 넣기위함
    stack.push(word[i])
    if(word[i]==='+' || word[i]==='-' || word[i]==='/' || word[i]==='*'){
        let op=stack.pop()
        let b=stack.pop()
        let a=stack.pop()
        let temp='('+a+op+b+')'
        stack.push(temp)
    }
}

console.log(eval(stack[0]).toFixed(2))
//eval()함수는 문자열로된 수식을 계산해줌
//처음엔 word변수가 배열이 아닌 string이었는데 각 요소에대한 수정이 되지않아
//배열로 바꿈

// let a='123'
// a[0]='2'
// console.log(a)

//이것을 보면 a의 값은 223이 될거같지만 그렇지 않음