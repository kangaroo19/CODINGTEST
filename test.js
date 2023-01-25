const numbers=[3, 30, 34, 5, 9]
const answer=numbers
                .map(numbers=>String(numbers))
                .sort((a,b)=>(b+a)-(a+b))
console.log(answer)

