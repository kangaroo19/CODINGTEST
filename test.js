const n=2
// const words=["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]
//const words=["hello", "one", "even", "never", "now", "world", "draw"]
//const words=["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]
const words=['aa','aba','aba','aa']
const stack=[words[0]]
for(let i=1;i<words.length;i++){
    if(stack[i-1][stack[i-1].length-1]===words[i][0]){
        stack.push(words[i])
    }
    else if(words[i].length===1){
        stack.push(false)
        break
    }
    else{
        stack.push(false)
        break
    }
    for(let j=0;j<stack.length-1;j++){
        if(words[i]===stack[j]){
            stack.pop()
            stack.push(false)
            break
        }
    }
}
for(let i=0;i<stack.length;i++){
    if(stack[i]===false){
        console.log([i%n+1,Math.floor(i/n+1)])
        break;
    }
}