const fs=require('fs');
const input=fs.readFileSync("example.txt").toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(x => +x));
const t=nums[0].shift() //테스트 케이스의 개수
let i=0
while(i<t){
   let n=Number(nums[i*3+1].shift())
   let m=Number(nums[i*3+1].shift())
   let array1=nums[i*3+2].splice(0,n)
   let array2=nums[i*3+3].splice(0,m) 
   let count=0
   let start=0
   let end=0
   array1.sort((a,b)=>b-a) //array1내림차순정렬
   array2.sort((a,b)=>b-a) //array2내림차순정렬
   while(start<n){
        if(array1[start]>array2[end]){//정답일때
            count=count+array2.length-end
            //두 배열 내림차순 정렬했으니 array2의 첫번째 요소가 작다면 마지막까지 작으므로 그 수만큼 count증가
            start++ //end가 끝까지 돌았으니 다음 start 대소 비교위함
            end=0  
        }
        else{//정답이 아닐때
            end++
            if(end==m){ //end가 끝까지 돌았으면 다음 start대소 비교위해 start ++ end =0 으로 초기화
                start++
                end=0
            }
        }
       
   }
   console.log(count)
   i++
}

//array1의 첫번째 요소 start
//array2의 첫번째 요소 end
//start값 하나씩 늘리면서 점검
//end도 값을 늘리면서 점검하는데 만약 end의 값이 start보다 값이 작으면
//내림차순했으니 그 뒤의 값도 작을것이므로 뒤에 있는 것들의 갯수 더함
//투포인터

//처음에는 내림차순정렬없이 하니까 시간초과났음
