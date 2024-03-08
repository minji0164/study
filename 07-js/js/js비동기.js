//---------------------------------------------------------------------2024.03.08
// 비동기 처리(작업을 동시에 처리하는 것)
console.log("자바칩 프라푸치노 주문");

//setTimeout은 비동기처리
setTimeout(() => {
  console.log("아메리카노 주문");
  console.log("아메리카노 제공");
}, 3000); //3초 후 출력

console.log("자바칩 프라푸치노 제공");

// 비동기 처리의 사용(코드가 실행되는 순서와 실제로 실행되는 순서를 달리하기)
function order(name, time) {
  console.log(`${name} 주문 받음, ${time / 1000}초 소요.`); //밀리세컨드 단위라 1000으로 나눠주기(그래야 3초로 나옴)

  setTimeout(() => {
    console.log(`${name}가 만들어졌습니다.`);
  }, time);
}
order("아메리카노", 3000);
order("카페모카", 4000);
order("자바칩 푸라푸치노", 6000);
//---------------------------------------------------------------------
