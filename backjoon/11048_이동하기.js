const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(v=>+v));
const [r,c]=nums.shift()
arr=[...Array(r+1)].map(()=>Array(c+1).fill(0))
for(let i=1;i<=r;i++){
    for(let j=1;j<=c;j++){
        arr[i][j]=Math.max(arr[i-1][j],arr[i][j-1],arr[i-1][j-1])+nums[i-1][j-1] //행과 열이 1부터 시작하므로 [i-1][j-1]
    }
}
console.log(arr[r][c])
//알고리즘
//위,왼쪽,왼쪽 위 대각선 방향 세가지 중 가장 큰 수를 현재 값(nums)에 더하고
//arr에 저장

//처음에는 8행의 최대값을 비교하는 각 항목에 || 0을 붙여서
//값이 없는 요소를 가리키면 0을 리턴하게 해서 풀라했지만
//열은 되지만 행에서 없는 값을 가리키면 에러나옴
//그래서 합을 저장하는 배열인 arr를 재편집
//ex
//r=4,c=3이라면
// 0,0,0,0,0
// 0,
// 0,(원래배열)
// 0,
//형태로 편집