function solution(id_list, report, n) {
    let set=new Set(report) //report에서 중복제거위해 set으로
    const arr=Array.from(set)//set을 다시 array로 변환
    const newArr=arr.map((v,i)=>v.split(" "))
    const map1=new Map() //유저가 신고한 id
    const map2=new Map() //신고당한 횟수
    id_list.map((v,i)=>map1.set(v,[]))
    id_list.map((v,i)=>map2.set(v,0))
    for(let i=0;i<newArr.length;i++){
        map1.get(newArr[i][0]).push(newArr[i][1])  
        map2.set(newArr[i][1],map2.get(newArr[i][1])+1) 
    }
    // console.log(map1)
    // console.log(map2)
    const answer=[]
    map1.forEach((v,k)=>{
        let count=0
        for(let item of v){
            map2.forEach((v,k)=>{ //map2의 value가 n보다 크거나 같으면 count 1 증가
                if(k===item && v>=n) count++ 
            })
        }
        answer.push(count)
    })
    return answer
}

//map1의 value 배열 각 요소 와 map2의 키값이 같고 map2의 value가 n보다 크거나 같으면 count 1 증가


//다른 사람의 풀이
const id_list=["muzi", "frodo", "apeach", "neo"]
const report=["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]
const k=2
const a=[...new Set(report)]
console.log(a)
function solution2(id_list, report, k) {
    let reports = [...new Set(report)].map(a=>{return a.split(' ')});
    console.log(reports)
    let counts = new Map(); //신고 당한 횟수
    for (const bad of reports){
        counts.set(bad[1],counts.get(bad[1])+1||1) //||1은 0을 제외하고 피연산자(앞의 값)값이 그대로 나옴,counts의 value 0으로 초기화 하지 않아도 됨
    }
    
    let good = new Map();
    for(const report of reports){
        if(counts.get(report[1])>=k){
            good.set(report[0],good.get(report[0])+1||1)
        }
    }
    console.log(counts)
    console.log(good)
    let answer = id_list.map(a=>good.get(a)||0) //피연산자(앞의 값)이 0,undefined,null이면 0 반환 나머지는 그대로
    return answer;
}

//solution2(id_list,report,k)
//console.log(NaN||1)