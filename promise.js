//Promise
//비동기 함수를 동기 처리하기 위해 고안한 객체이다
//비동기 작업이 완료된 이후에 다음 작업을 연결시켜 진행 할 수 있는 기능을 가지고 있음
//작업 결과에 따라 성공 또는 실패를 리턴하며 결과값을 전달 받을 수 있음
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
                resolve('학교에 도착했습니다.')
            }
            else{
                reject('중간에 넘어져 다쳤습니다.')
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