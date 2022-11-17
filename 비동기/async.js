function timer(time){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(time)
        },time)
    })
}

// timer(1000) //promise를 사용하는 기본적인 방법
//     .then((data)=>{
//         console.log('time : '+data)
//         return timer(data+1000)
//     })
//     .then((data)=>{
//         console.log('time : '+data)
//         return timer(data+1000)
//     })
//     .then((data)=>{
//         console.log('time : '+data)
//     })

//Async는 Promise의 디버깅 힘듦,가독성이 떨어진다는 단점 보완하기 위해 나옴
//비동기 코드를 마치 동기 코드처럼 보이게 작성 할 수 있음
//async 함수는 반드시 프라미스를 리턴,프로미스 처리 될 때까지 기다리게 만드는 await 사용 가능

async function run(){ 
    let time=await timer(1000)
    console.log('time : '+time)
    time=await timer(time+1000)
    console.log('time : '+time)
    time=await timer(time+1000)
    console.log('time : '+time)
}


// async function run2(){
//     console.log('parent start')
//     await run()
//     console.log('parent end')
// }

// console.log('parent parent start')
// run2().then(()=>{
//     console.log('parent parent end')

// })


async function f(){
    let promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('완료')
        },1000)
    })
    console.log('start')
    let result = await promise //await는 프라미스가 처리될 때 까지 함수 실행 기다리게 만듦
    console.log(result)
    console.log('end')
}

// f()

let n=64

const dp=[[[1,2],[2,2]]]
console.log(dp[0][0])
dp.push([])
