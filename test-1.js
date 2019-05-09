// 1. 아래 코드의 의미를 설명하고 ES6의 functional programming을 활용해서 변경하세요.
const incomes = [1000, 2000, 3000, 4000];

let vats = [];
for (i = 0; i < incomes.length; i++) {
  // 부가세 계산
  vats[i] = incomes[i] / 11;
}

let price = 0;
for (let i in incomes) {
  price += incomes[i];
}
