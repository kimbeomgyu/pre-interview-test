// 1. 아래 코드의 의미를 설명하고 ES6의 functional programming을 활용해서 변경하세요.
// 수입의 부가세와, 수입의 합을 구하는 문제입니다.

const incomes = [1000, 2000, 3000, 4000];

const add = (accumulator, income) =>
  accumulator + (typeof income !== 'number' ? 0 : income);
const division = income => (typeof income !== 'number' ? 0 : income / 11);

const vats = incomes =>
  Array.isArray(incomes) ? incomes.map(division) : 'Not an array';

const price = incomes =>
  Array.isArray(incomes) ? incomes.reduce(add, 0) : 'Not an array';

// 테스트
log(`=======================================================================`);
console.group(`Array 인 경우`);

log('[]: ', vats([]));
log('[1000, 2000, 3000, 4000]: ', vats([1000, 2000, 3000, 4000]));
log('[`1000`, `2000`, `3000`, `4000`]', vats([`1000`, `2000`, `3000`, `4000`]));
log(
  `[false, undefined, 'string', {}]: `,
  vats([false, undefined, 'string', {}])
);

console.groupEnd(`Array 인 경우`);

console.group(`Array 가 아닌 경우: `);

log(`{}: `, vats({}));
log(`1: `, vats(1));
log(`String: `, vats('String'));
log(`true: `, vats(true));
log(`undifined: `, vats(undefined));

console.groupEnd(`Array 가 아닌 경우: `);

log(`=======================================================================`);
console.group(`Array 인 경우`);

log('[]: ', price([]));
log('[1000, 2000, 3000, 4000]: ', price([1000, 2000, 3000, 4000]));
log(
  '[`1000`, `2000`, `3000`, `4000`]',
  price([`1000`, `2000`, `3000`, `4000`])
);
log(
  `[false, undefined, 'string', {}]: `,
  price([false, undefined, 'string', {}])
);

console.groupEnd(`Array 인 경우`);

console.group(`Array 가 아닌 경우: `);

log(`{}: `, price({}));
log(`1: `, price(1));
log(`String: `, price('String'));
log(`true: `, price(true));
log(`undifined: `, price(undefined));

console.groupEnd(`Array 가 아닌 경우: `);

function log(message, test = ``) {
  console.log(message, test);
}
