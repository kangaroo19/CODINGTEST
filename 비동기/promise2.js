
function job1(){
    return new Promise(function (resolve,reject){
        setTimeout(()=>{
            resolve('job1 ok!')
        },1000)
    })
}

function job2(){
    return new Promise(function (resolve,reject){
        setTimeout(()=>{
            resolve('job2 ok!')
        },1000)
    })
}


// job1().then(function(data){
//     console.log(data)
//     job2().then(function(data){
//         console.log(data)
//     })
// })
// nested 방식

job1()
    .then(function(data){ //then 안에는 콜백함수 들어감
        console.log(data)
        return job2()
    })
    .catch(function(reason){
        console.log(reason)
        return Promise.reject()
    })
    .then(function (data){
        console.log(data)
    })
//chaining 방식





function timer(time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(time)
        },time)
    })
}
// console.time('promise all') //all은 가장늦게 끝나는 작업이 끝나면 다음것 실행
// Promise.all([timer(1000),timer(2000),timer(3000)]).then((result)=>{
//     console.log(result)
//     console.timeEnd('promise all')
// })

// console.time('promise race') //race는 빨리끝나는것
// Promise.race([timer(1000),timer(2000),timer(3000)]).then((result)=>{
//     console.log(result)
//     console.timeEnd('promise race')
// })