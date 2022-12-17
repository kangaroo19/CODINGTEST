function solution(numbers, hand) {
    const keyPads=[[3,1],[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]]
    const lstack=[[3,0]]
    const rstack=[[3,2]]
    let answer=""
    numbers.forEach((v,i)=>{
        if(v===1 || v===4 || v===7){ //무조건 왼손
            answer+='L'
            lstack.push(keyPads[v])
        }
        else if(v===3 || v===6 || v===9){ //무조건 오른손
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
    return answer
}