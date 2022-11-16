//Promise
//비동기 함수를 동기 처리하기 위해 고안한 객체이다
//비동기 작업이 완료된 이후에 다음 작업을 연결시켜 진행 할 수 있는 기능을 가지고 있음
//작업 결과에 따라 성공 또는 실패를 리턴하며 결과값을 전달 받을 수 있음

//pending(대기):처리가 완료되지 않은 상태,promise가 생성되는 직후부터 resolve나 reject가 호출되기 전까지의 순간
//fulfilled(이행):성공적으로 처리 완료된 상태
//rejected(거부):처리가 실패로 끝난 상태

//promise 안에는 작업이 성공했는지 실패했는지 알려주는 콜백함수가 들어가야 함



function goToSchool() {
    console.log("학교에 갑니다.");
}

function arriveAtSchool_asis() {
    setTimeout(function() {
        console.log("학교에 도착했습니다.");
    }, 1000);
    
}


function study() {
    console.log("열심히 공부를 합니다.");
}

// goToSchool()
// arriveAtSchool_asis()
// study()

function arriveAtSchool_tobe(){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('학교에 도착했습니다.')
            resolve()
        },1000)
    })
}

// goToSchool()
// arriveAtSchool_tobe().then(function(){
//     study()
// })



function arriveAtSchool_tobe_adv(){
    return new Promise(function(resolve,reject){ 
        setTimeout(function(){
            let status=Math.floor(Math.random()*2)
            if(status===1){
                resolve('학교에 도착했습니다.') //resolve는 fulfilled상태시 실행
            }
            else{
                reject('중간에 넘어져 다쳤습니다.') //reject는 rejected상태시 실행
            }
        },1000)
    })
}

function cure(){
    console.log('양호실에 가서 약을 발랐습니다.')
}

// goToSchool();
// arriveAtSchool_tobe_adv()
// .then(function(res){
//     console.log(res);
//     study();
// })
// .catch(function(err){
//     console.log(err);
//     cure();
// });

// setTimeout(function(){
//     console.log(1)
//     setTimeout(()=>{
//         console.log(2)
//         setTimeout(()=>{
//             console.log(3)
//             setTimeout(()=>{
//                 console.log(4)
//             },1000)
//         },1000)
//     },1000)
// },1000)

//콜백지옥 예제

function getChicken(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('동묘시장->chicken')
            resolve(getEgg)
        },1000)
    })
}

function getEgg(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('동묘시장->chicken->egg')
            resolve(getMeal)
        },1000)
    })
}

function getMeal(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('동묘시장->chicken->egg->fried egg')
        },1000)
    })
}

// getChicken()
//     .then((data)=>data())
//     .then((data)=>data())
//     .then((data)=>console.log(data))

function timer(time){
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve(time)
        },time)
    })
}
// console.log('start')
// timer(1000).then((time)=>{
//     console.log('time:'+time)
//     return timer(time+1000)
// }).then((time)=>{
//     console.log('time:'+time)
//     return timer(time+1000)
// }).then((time)=>{
//     console.log('time:'+time)
//     console.log('end')
// })
// async function run(){
//     console.log('start')
//     let time=await timer(1000)
//     console.log('time:'+time)
//     time=await timer(time+1000)
//     console.log('time:'+time)
//     time=await timer(time+1000)
//     console.log('time:'+time)
//     console.log('end')
// }
// async function run2(){
//     console.log('parent start')
//     await run()
//     console.log('parent end')
// }

// run2()

// setTimeout(()=>{
//     console.log(1)
// })
function job1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('job1 ok!')
        },2000) //2초가 지나면 resolve호출,resolve가 호출되면 프로미스가 대기 -> 이행상태 그리고 then으로 감
    })
}
function job2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('job2 ok!')
        },2000)
    })
}
// job1().then((data)=>{
//     console.log(data)
//     job2().then((data)=>{
//         console.log(data)
//     })
// })

// job1() 
//     .then((data)=>{
//         console.log(data)
//         return job2()
//     })
//     .then((data)=>{
//         console.log('')
//     })

    // new Promise(function(resolve, reject){
    //     setTimeout(function() {
    //       resolve(1);
    //     }, 2000);
    //   })
    //   .then(function(result) {
    //     console.log(result); // 1
    //     return result + 10;
    //   })
    //   .then(function(result) {
    //     console.log(result); // 11
    //     return result + 20;
    //   })
    //   .then(function(result) {
    //     console.log(result); // 31
    //   });

let _promise=function (param){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(param) resolve('해결완료')
            else reject('실패')
        },1000)
    })
}

// console.log(1)
// _promise(false)
//     .then((data)=>{
//         console.log(2)
//         return
//     })
//     .catch((data)=>console.log(2))
//     .then(()=>console.log(3))

