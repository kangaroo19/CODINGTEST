function solution(strings, n) {
    strings.sort() //n번째 인덱스가 서로 같다면 사전순 정렬 하라고 햇으므로 미리 사전 순 정렬
    strings.sort((a,b)=>{
        if(a[n]>b[n]) return 1 //그냥 넘어감
        if(a[n]<b[n]) return -1 //위치바꿈
        else return 0
    })
    return strings
}