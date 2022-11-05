function solution(ing) {
    let count=0
    const stack=[]
    for(let i=0;i<ing.length;i++){
        stack.push(ing[i])
        if(stack.length>=4 && 
           stack[stack.length-1]===1 && 
           stack[stack.length-2]===3 && 
           stack[stack.length-3]===2 && 
           stack[stack.length-4]===1) {
                stack.pop()
                stack.pop()
                stack.pop()
                stack.pop()
                count++
        }

    }
    return count
}