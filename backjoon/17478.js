const input = require('fs').readFileSync('example.txt').toString().trim().split(' ');
let n=Number(input[0]);

//process.stdout.write("_");
console.log("어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.")

  
function rec(depth){
  for(let i=0;i<depth*4;i++){
    process.stdout.write("_");
  } 
  console.log("\"재귀함수가 뭔가요?\"")


  if(depth==n){ //종료
    for(let i=0;i<depth*4;i++){
      process.stdout.write("_");
    }
    console.log("\"재귀함수는 자기 자신을 호출하는 함수라네\"")
    for(let i=0;i<depth*4;i++){
      process.stdout.write("_");
    }
    console.log("라고 답변하였지.")
    return;
  }

  for(let i=0;i<depth*4;i++){
    process.stdout.write("_");
  }
  console.log("\"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.")
  for(let i=0;i<depth*4;i++){
    process.stdout.write("_");
  }
  console.log("마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.")
  for(let i=0;i<depth*4;i++){
    process.stdout.write("_");
  }
  console.log("그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어.\"")
  rec(depth+1)

  for(let i=0;i<depth*4;i++){
    process.stdout.write("_");
  }
  console.log("라고 답변하였지.")
  return "";
}

console.log(rec(0))

