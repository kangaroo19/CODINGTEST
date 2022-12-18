function solution(lottos, win_nums) {
    let zeros=0
    let win=0
    lottos.map((v1,i1)=>{
        if(v1===0) zeros++
        win_nums.map((v2,i2)=>{
            if(v1===v2) win++
        })
    })


    const worst=(7-win>=6)?6:7-win
    const best=(worst-zeros)<1?1:worst-zeros

    return [best,worst]
}

///다른 사람의 풀이

function solution2(lottos,win_nums){
    const win=lottos.filter(v=>win_nums.includes(v)).length
    const zeros=lottos.filter(v=>v===0).length
    const worst=(7-win>=6)?6:7-win
    const best=(worst-zeros)<1?1:worst-zeros
    return [worst,best]
}
