function solution(s) {
    s=s.split('')
    let count=0

    for(let i=0;i<s.length;i++){
        const stack=[]
        let tmp=s.shift()
        s.push(tmp)
        let arr=s.slice()
        if(arr.length%2===1) break
        for(let j=0;j<arr.length;j++){
            if(arr[j]==='[' || arr[j]==='(' || arr[j]==='{') stack.push(arr[j]) 
            else if(arr[j]===']' && stack[stack.length-1]==='[') stack.pop()
            else if(arr[j]===')' && stack[stack.length-1]==='(') stack.pop()
            else if(arr[j]==='}' && stack[stack.length-1]==='{') stack.pop()
        }
        (!stack.length)?count++:null
    }
    return count
}



//다른 사람의 풀이

function solution2(s) {
    let answer = 0;
    let sArr = s.split('');

    for (let i = 0; i < sArr.length; i++) {
        sArr.push(sArr.shift());

        if (check(sArr)) {
            answer++;
        }
    }

    return answer;
}

function check(arr) {
    let checkArr = [];
    const obj = {
        '[': ']',
        '(': ')',
        '{': '}'
    };

    for (let i = 0; i < arr.length; i++) {
        if (obj[checkArr[checkArr.length - 1]] === arr[i]) {
            checkArr.pop();
        } else {
            checkArr.push(arr[i]);
        }
    }

    return checkArr.length === 0;
}

console.log(solution2("}]()[{"))

//객체(변수명 obj)를 활용해서 if문 줄일수 있음