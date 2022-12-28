const n=3
const left=2
const right=6

function solution(n, left, right) {
    const arr=new Array(right - left + 1).fill(0).reduce((acc, _, i) => {
        //console.log(i)
        console.log(parseInt((i+left)/n),(i+left)%n)
      acc.push(Math.max((i + left) % n, parseInt((i + left) / n)) + 1);
      return acc;
    }, []);
    console.log(arr)
  }
console.log(solution(n,left,right))

//각 좌표값은 n을 넘을 수 없다는 것을 이용해서 나눈던가 나머지 구하던가
//좌표 [x,y]의 값은 Math.max(x+1,y+1)
//행 => (i/n)
//열 => (i%n)