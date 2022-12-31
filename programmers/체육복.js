function solution(n,lost,reserve){
    const clothes=Array(n).fill(1)
    lost.map((v)=>clothes[v-1]=0)
    reserve.map((v)=>clothes[v-1]++)
    for(let i=0;i<n;i++){
        if(clothes[i]===0 && clothes[i-1]===2){
            clothes[i]=1
            clothes[i-1]=1
        }
        else if(clothes[i]===0 && clothes[i+1]===2){
            clothes[i]=1
            clothes[i+1]=1
        }
    }
    return clothes.filter((v)=>v>=1).length
}

console.log(solution(4,[1,3],[2,4]))