// 2. 아래 코드의 의미를 파악해서 설명하고 잠재적으로 발생할 수 있는 문제를 파악해서 설명하고
// 그 문제가 발생하지 않도록 코드를 수정하세요.

// 날짜 데이터 모듈을 받아와서 속성값들을 순환하면서 값이 undefined라면 삭제시키고,
// moment의 인스턴스라면 toISOString()메소드를 실행한 값을 반환합니다.

// 1. 순환시에 for - in 문을 사용할 경우 열거 할 수 있는 모든 속성들이 순환 되기에
// 삭제하는 위험한 동작에 적합하지 않다고 생각합니다. for - of 로 변경
// 2. == 는 의도를 했거나 의도하지 않은 다른타입도 같다고 판단하기 때문에
// 불명확한 의사전달이 될 수 있으므로 === 를 통해 엄격하게 체크해야합니다. === 로 변경

const moment = require('moment');
const convertParam = params => {
  for (const val of params) {
    if (val === undefined) {
      delete val;
    } else if (val instanceof moment) {
      val = val.toISOString();
    }
  }
};

const p = { a: 'test', b: moment('2019-05-07'), c: undefined };
convertParam(p);
