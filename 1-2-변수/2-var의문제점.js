var apple = 10;
// var apple = 20;

// 블록 레벨 스코프 지원X
var num = 10;
if (1) {
  var num = 20;
  console.log('if 안의 num: ', num);
}
console.log('if 안의 num: ', num);

// 3.hoisting : 변수 선언을 자동으로 위로 끌어올림.
console.log(ironMan);
var ironMan = '토니 스타크';