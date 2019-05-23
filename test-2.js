// 2. 아래 코드의 의미를 파악해서 설명하고 잠재적으로 발생할 수 있는 문제를 파악해서 설명하고
// 그 문제가 발생하지 않도록 코드를 수정하세요.

// 날짜 데이터 모듈을 받아와서 속성값들을 순환하면서 값이 undefined라면 삭제시키고,
// moment의 인스턴스라면 toISOString()메소드를 실행한 값을 반환합니다.

// 날짜데이터 모듈
const moment = require('moment');

const convertParam = params => {
  // 객체 안에 또다른 객체나 배열이 있다면 문제가 될수 있지만
  // 이 경우에는 얕은 카피만으로도 충분하다고 판단되었습니다.
  const copyParams = Object.assign({}, params);
  // 1. 순환시에 for - in 문을 사용할 경우 열거 할 수 있는 모든 속성들이 순환 되기에
  // 삭제하는 위험한 동작에 적합하지 않다고 생각합니다. for - of 로 변경
  for (const val of copyParams) {
    // 2. == 는 의도를 했거나 의도하지 않은 다른타입도 같다고 판단하기 때문에
    // 불명확한 의사전달이 될 수 있으므로 === 를 통해 엄격하게 체크해야합니다. === 로 변경
    // 혹시라도 의도한것이라면 !val을 이용하여 체크
    if (val === undefined) {
      delete val;
    } else if (val instanceof moment) {
      val = val.toISOString();
    }
  }
  return copyParams;
  // 3. 잠재적으로 이 함수가 사용하는 params객체를 다른 곳에서 사용할 경우
  // 문제가 발생할 수 있으므로 순수함수로 작성되어야 합니다.
};

const p = { a: 'test', b: moment('2019-05-07'), c: undefined };
convertParam(p);
