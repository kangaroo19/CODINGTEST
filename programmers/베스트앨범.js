function solution(genres, plays) {
    const map=new Map()
 
 for(let i=0;i<genres.length;i++){
     if(!map.has(genres[i])) map.set(genres[i],(plays[i]))
     else map.set(genres[i],map.get(genres[i])+" "+(plays[i]))
 }
 const arr=[]
 map.forEach((v,k)=>{
     if(v.length>=2) arr.push(v.split(" "))
     else arr.push([v])
 
 })
 
 for(let i=0;i<arr.length;i++){
     let sum=0
     for(let j=0;j<arr[i].length;j++){
         arr[i][j]=Number(arr[i][j])
         sum+=arr[i][j]
     }
     arr[i].push(sum)
 }
 
 arr.sort((a,b)=>b[b.length-1]-a[a.length-1])
 for(let i=0;i<arr.length;i++){
     arr[i].pop()
 }
 const result=[]
 arr.map((v,i)=>{
     v.sort((a,b)=>b-a)
     result.push(v[0])
     if(v.length>=2) result.push(v[1])
 
 })
 
 
 
 const answer=[]
 for(let i=0;i<result.length;i++){
     let idx=plays.indexOf(result[i])
     answer.push(idx)
     plays[idx]=null
 }
     return answer
 }


 //

 function solution2(genres, plays) {
    const count = {};
    let answer = [];
    const acc = genres.reduce((a, c, i) => { //c는 현재 장르
        count[c] ? count[c].push([i, plays[i]]) : count[c] = [[i, plays[i]]];
        return a.set(c, a.get(c) ? a.get(c) + plays[i] : plays[i]), a;
    }, new Map());
   
    [...acc].sort((a, b) => b[1] - a[1]).map(v => {
            console.log(v)
            answer = answer.concat(count[v[0]].sort((c, d)=>d[1]-c[1]).slice(0,2));
        console.log(answer)

    });
    return answer.map(v=>v[0]);
}

console.log(solution2(["pop", "pop", "pop", "rap", "rap"],[45, 50, 40, 70, 70]))