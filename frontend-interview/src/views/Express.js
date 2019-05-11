import React from "react";
import PropTypes from "prop-types";
import Calculate from "../components/Calculate";
// 코드에서 중복되는 부분이 보여 새로운 컴포넌트로 생성 할 수 있다는 생각을 하였고
// 계산식만 변경하게끔 하여 컴포넌트화 하였습니다.
const Express = ({ show, handleShow, source, multiply, substract, plus }) => {
  // props를 Destructuring 한 후에 중복되는 props라는 단어를 제거하였습니다.
  // 계산식과 구한 값을 배열에 객체로 담아서 사용하였습니다.
  const calculateData = [
    { json: `${source} X ${multiply}`, calculate: source * multiply },
    { json: `${source} - (${substract})`, calculate: source - substract },
    { json: `${source} + ${plus}`, calculate: source + plus }
  ];

  return show ? (
    <div>
      {calculateData.map(Calculate)}
      <p>
        문제. 힝 ㅜㅜ 같은 답이 나와야하는데, 어떻게 고쳐야할까요? (정답 : 36)
      </p>
      <small>
        * 여러분의 동료가 이렇게 코드를 만들었다 가정하고, 코드들 중 어떤 문제가
        있고 해당 코드를 사용했을때 어떤 문제가 우려되는지, 또 고쳐보신 후 왜
        그렇게 고치게 되었는지 주석으로 코드 옆에 남겨주세요. *
      </small>
    </div>
  ) : (
    <button onClick={() => handleShow(true)}>시험 결과 오픈!</button>
  );
};

Express.propTypes = {
  source: PropTypes.any.isRequired,
  multiply: PropTypes.any.isRequired,
  substract: PropTypes.number.isRequired,
  plus: PropTypes.any,
  show: PropTypes.any,
  handleShow: PropTypes.func
};

export default Express;
