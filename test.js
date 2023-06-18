let n = 10;
let numbers = new Array();
// const numbers=new Array(10000000)
for (let i = 1; i <= n; i++) {
  numbers.push(i);
}


// console.time('For in')
// for(let i in numbers){}
// console.timeEnd('For in')

// console.time('for of')
// for(let i of numbers){}
// console.timeEnd('for of')

// console.time('forEach')
// numbers.forEach((v,i)=>{})
// console.timeEnd('forEach')

// console.time('for')
// for(let i;i<numbers.length;i++){}
// console.timeEnd('for')



let iterable = new Uint8Array([0x00, 0xff, 0xff]);
for(i of iterable){
  console.log(i)
}