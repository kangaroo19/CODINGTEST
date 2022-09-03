const names=['haley','alex','luke']
const [first,second]=names


//names라는 배열의 첫번째 두번째 요소를 각각 
//first,second라는 변수에 담는다는 뜻

//console.log(first,second) //=> haley alex

const flowers=['rose','tulip','sunflower','iris']

const [a,...b]=flowers
//첫번째 요소를 제외한 나머지 요소만 b에 저장
//console.log(b) //=>[ 'tulip', 'sunflower', 'iris' ]
//console.log(a) //=>rose

