function solution(nums) {
    const answer=[];
    let tmp=null;
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            for(let k=j+1;k<nums.length;k++){
                tmp=nums[i]+nums[j]+nums[k];
                (tmp%2==1)?answer.push(tmp):null;
            }
        }
    }


    let count=0

    for(let i=0;i<answer.length;i++){
        const arr=[];
        for(let j=1;j<=answer[i];j++){
            if(answer[i]%j===0) arr.push(j);
        }
        if(arr.length===2) count++
    }
    return count
}