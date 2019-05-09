// 2. 아래 코드의 의미를 파악해서 설명하고 잠재적으로 발생할 수 있는 문제를 파악해서 설명하고
// 그 문제가 발생하지 않도록 코드를 수정하세요.
const Moment = require('moment');
const convertParam = params => {
  for (const key in params) {
    if (params[key] == undefined) {
      delete params[key];
    }
    if (params[key] instanceof moment) {
      params[key] = params[key].toISOString();
    }
  }
};

const p = { a: 'test', b: moment('2019-05-07'), c: undefined };
convertParam(p);
