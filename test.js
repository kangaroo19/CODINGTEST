const numbers=[7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]
const hand='left'
const keyPads=[[3,1],[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]]
const lstack=[[3,0]]
const rstack=[[3,2]]
let answer=""
numbers.forEach((v,i)=>{
    if(/[147]/.test(v)){ //무조건 왼손
        answer+='L'
        lstack.push(keyPads[v])
    }
    else if(/[369]/.test(v)){ //무조건 오른손
        answer+='R'
        rstack.push(keyPads[v])
    }
    
    else{
        let len1=Math.abs(lstack[lstack.length-1][0]-keyPads[v][0])+Math.abs(lstack[lstack.length-1][1]-keyPads[v][1])
        let len2=Math.abs(rstack[rstack.length-1][0]-keyPads[v][0])+Math.abs(rstack[rstack.length-1][1]-keyPads[v][1])
        console.log(len1,len2)
        if(len1<len2){
            answer+='L'
            lstack.push(keyPads[v])
        }
        else if(len1>len2){
            answer+='R'
            rstack.push(keyPads[v])
        }
        else{
            answer+=hand.substring(0,1).toUpperCase()
            if(hand.substring(0,1)==='l') lstack.push(keyPads[v])
            else rstack.push(keyPads[v])
        }
    } 
})
console.log(answer)
