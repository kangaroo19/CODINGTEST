const input = require('fs').readFileSync('example.txt').toString().trim().split(' ');
let n=Number(input[0]);




function rec(n){  
  for(let i=0;i<n*4;i++){
    process.stdout.write("-");
  }
  console.log("\"재귀함수가 뭔가요?\"")
  console.log("\"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.")
  console.log("마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.")
  console.log("그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어.\"")
  if(n==0){
    console.log("\"재귀함수가 뭔가요?\"")
    console.log("\"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.")
    console.log("마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.")
    console.log("그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어.\"") 
    return;
  }
  rec(n-1)
}

console.log("어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.")
rec(n)