function solution(answers){
    const answer=[]
    const a1=[1,2,3,4,5]
    const b1=[2,1,2,3,2,4,2,5]
    const c1=[3,3,1,1,2,2,4,4,5,5]

    const a2=answers.filter((v,i)=>v===a1[i%5]).length
    const b2=answers.filter((v,i)=>v===b1[i%8]).length
    const c2=answers.filter((v,i)=>v===c1[i%10]).length

    const max=Math.max(a2,b2,c2)
    console.log(max)
    if (a2 === max) {answer.push(1)};
    if (b2 === max) {answer.push(2)};
    if (c2 === max) {answer.push(3)};
    return answer
}