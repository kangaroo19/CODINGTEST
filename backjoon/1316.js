const input = require('fs').readFileSync('example.txt').toString().split('\n');
const inputNumber=parseInt(input[0]);
let count=0;
for(let i=1;i<inputNumber+1;i++){
    for(let j=0;j<input[i].length;j++){
        if((input[j]==input[j+1]) && (input[j]==input[input[i].length--])){
            console.log("wrong")
            break;
        }
        
    }

}

