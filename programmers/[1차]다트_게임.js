function solution(dart) {
    const stack=[]
    const arr=dart.match(/(\d+\D[\#\*]?)/gi)
    arr.forEach((v,_)=>{
        let score=v.match(/(\d{1,})/gi).join('')
        v=v.replace(/(\d{1,})/gi,"").replace(/S/g,'1').replace(/D/g,'2').replace(/T/g,'3')
        if(v.includes('#')){
            stack.push(Math.pow(score,v[0])*-1)
        }
        else if(v.includes('*')){ 
            stack.push(Math.pow(score,v[0]))   
            if(stack.length>=1){ //두번째 이상 횟수에서 * 나왔을때
                stack[stack.length-1]*=2
                stack[stack.length-2]*=2
            }
        }
        else{ // * ,# 둘다 없을 때
            stack.push(Math.pow(score,v[0]))
        }
    })
    return stack.reduce((acc,cur)=>acc+cur)
}

//다트를 던지는 횟수는 3번 이므로
//인자가 1T2D3D# 이라면
//['1T','2D','3D#'] 으로 정규식을 사용해 나눔
//점수는 0~10 까지 이므로 정규식을 사용해 숫자 부분만 추출


function solution2(dartResult) {
    const bonus = { 'S': 1, 'D': 2, 'T': 3 },
          options = { '*': 2, '#': -1, undefined: 1 };

    let darts = dartResult.match(/\d.?\D/g);
    console.log(darts)
    for (let i = 0; i < darts.length; i++) {
        let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
            score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];
        if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];

        darts[i] = score;
    }

    return darts.reduce((a, b) => a + b);
}
solution2('1S*2T*3S')


