function solution(str) {
    str=str.toLowerCase()
    let reg1=/[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/gi
    str=str.replace(reg1,"")

    let reg2=/\.{2,}/gi
    str=str.replace(reg2,".")

    let reg3=/^\./gi
    str=str.replace(reg3,"")

    let reg4=/\.$/gi
    str=str.replace(reg4,"")


    str=(!str.length)?'a':str
    str=(str.length>=16)?str.substring(0,15):str
    str=str.replace(reg4,"")
    str=(str.length<=2)?str.padEnd(3,str[str.length-1]):str
    return str
}
///다른 사람의 풀이
function solution2(new_id) {
    const answer = new_id
        .toLowerCase() // 1
        .replace(/[^\w-_.]/g, '') // []안의 ^ 는 제외하고 라는 뜻
        .replace(/\.+/g, '.') // 3
        .replace(/^\.|\.$/g, '') // 4 | 는 둘중 하나
        .replace(/^$/, 'a') // 5 빈 문자열 일때
        .slice(0, 15).replace(/\.$/, ''); // 6
    const len=answer.length
    return len>2?answer:answer.padEnd(3,answer[answer.length-1])
}
