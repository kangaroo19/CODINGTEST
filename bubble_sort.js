function bubbleSort(arr){
    for(let i=arr.length; i>0; i--){
        for(let j=0; j<i-1; j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }
    return arr
}


console.log(bubbleSort([1,3,4,2]))

//현재 인덱스보다 다음 인덱스 값이 더 크면 자리 바꿈
//뒤부터 정렬됨
//버블정렬의 시간복잡도는 O(n^2)

function selectSort(arr){
    for(let i=0;i<arr.length;i++){
        let min=i
        for(let j=i;j<arr.length;j++){
            if(arr[j]<arr[min]) min=j
        }
        [arr[i],arr[min]]=[arr[min],arr[i]]
    }
    return arr
}

console.log(selectSort([5,3,1,2,4]))

//가장 작은 값을 탐색한 다음 그 값을 정렬이 안된 배열의
//맨 앞에 위치한 값(i)과 교체
//시간복잡도는 O(n^2)

function insertSort(arr){
    for(let i=1;i<arr.length;i++){
        let cur=arr[i]
        let j=i-1
        while(j>=0 && arr[j]>cur){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=cur
    }
    return arr
}


function quickSort(arr){
    if(arr.length<=1) return arr
    const pivot=arr[0]
    const left=[]
    const right=[]

    for(let i=1;i<arr.length;i++){
        if(arr[i]<=pivot) left.push(arr[i])
        else right.push(arr[i])
    }
    const lSorted=quickSort(left)
    const rSorted=quickSort(right)
    return [...lSorted,pivot,...rSorted]
}

console.log(quickSort([2,3,1,5,4]))

//기준점(pivot)을 잡는다 여기서는 첫번째 요소
//기준점 보다 작으면 left, 크면 right에 푸시한다
//나눈 left와 right배열을 다시 함수에 넣는다

//시간복잡도는 nlogn
//정렬된 배열에 대해서는 수행시간 오래걸림
//배열이 계속 불균형하게 나눠지는 경우(정렬된 배열)