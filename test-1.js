// 1. 아래 코드의 의미를 설명하고 ES6의 functional programming을 활용해서 변경하세요.
const incomes = [1000, 2000, 3000, 4000];

let vats = incomes.map(income => income / 11);
let price = incomes.reduce((A, income) => A + income, 0);

// 부가세 계산하는 식으로써 각각의 수입을 순회하면서
// vats라는 새로운 배열에 각각의 값들을 / 11 하여 담습니다.

// 수입을 모두 더하는 식입니다.
