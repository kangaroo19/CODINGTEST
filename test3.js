const str='aaAA'
console.log([...str].reduce((acc,cur)=>{('A'<=cur && cur<='Z')?'1':'2'},''))
