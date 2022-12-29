// const quiz=["3 - 4 = -3", "5 + 6 = 11"]
// const answer=[]
// quiz.map((v)=>{answer.push((eval(v.substring(0,v.length-5))===Number(v.substring(v.indexOf('=')+1))?'O':'X'))})


// console.log(answer)
let str = 'Hello world, Java, Java, Java';

str = str.replace(/[aeiou]/g, '1');
console.log(str);

const rsp='205'
const test=rsp.split('').map((v,i)=>v.replace('2','0').replace('0','5').replace('5','2')).join('')
console.log(test)
console.log(rsp.replace('2',0))