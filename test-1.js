// 1. 아래 코드의 의미를 설명하고 ES6의 functional programming을 활용해서 변경하세요.
const incomes = [1000, 2000, 3000, 4000];

function reduce(cb, acc, iter) {
  for (const cur of iter) {
    acc = cb(acc, cur);
  }
  return acc;
}

function map(cb, iter) {
  const arr = [];
  for (const val of iter) {
    arr.push(cb(val));
  }
  return arr;
}

const add = (a, b) => a + b;
const tax = a => a / 11;

let vats = map(tax, incomes);
let price = reduce(add, 0, incomes);
