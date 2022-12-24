function solution(clothes) {
    let map=new Map()
    let hap=1
    clothes.map((v,_)=>{map.set(v[1],(map.get(v[1])||0)+1)})
    map.forEach((v,k)=>{hap*=(v+1)})
    return hap-1
}