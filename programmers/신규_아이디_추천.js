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

function solution2(new_id) {
    const answer = new_id
        .toLowerCase() // 1
        .replace(/[^\w-_.]/g, '') // 2
        .replace(/\.+/g, '.') // 3
        .replace(/^\.|\.$/g, '') // 4
        .replace(/^$/, 'a') // 5
        .slice(0, 15).replace(/\.$/, ''); // 6
    const len=answer.length
    return len>2?answer:answer.padEnd(3,answer[answer.length-1])
}
