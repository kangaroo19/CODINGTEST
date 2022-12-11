let str="z-+.^."
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
str=(str.length>=16)?str.substring(0,16):str
str=(str.length<=2)?str.padEnd(3,str[str.length-1]):str
console.log(str)