const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const n=Number(input.shift())
const word=input.shift().trim()
const array=input
word[0]='D'
console.log(word)
const stack=[]
for(let i=0;i<word.length;i++){
    if('A'<=word[i] && word[i]<='Z'){
        word.replace('A',array[word[i].charCodeAt()-65])
    }
}
console.log(word)
for(let i=0;i<word.length;i++){
    stack.push(word[i])
    if(word[i]==='+' || word[i]==='-' || word[i]==='/' || word[i]==='*'){
        let op=stack.pop()
        let b=stack.pop()
        let a=stack.pop()
        let temp='('+a+op+b+')'
        stack.push(temp)
    }
}
