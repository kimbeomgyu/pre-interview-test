import React from "react";
import PropTypes from "prop-types";
import correct from "../assets/icon/correct.png";
import incorrect from "../assets/icon/incorrect.png";

const Calculate = ({ json, calculate }, index) => (
  <div key={json} style={style.position}>
    <p style={style.block}>{`${index + 1}. ${json}`}</p>
    <img
      style={style.img}
      src={calculate === 36 ? correct : incorrect}
      alt="채점"
    />
    <p>답 : {calculate}</p>
  </div>
);

//컴포넌트에서 각각의 태그들이 어떤 구조로 되어있는지 한눈에 볼 수 있도록 style을 따로 작성하였습니다.
const style = {
  position: { position: "relative" },
  block: {
    fontWeight: "bold",
    display: "inline-block",
    marginRight: "10px"
  },
  img: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100px",
    height: "100px"
  }
};

Calculate.propTypes = {
  json: PropTypes.string.isRequired,
  calculate: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired
};

export default Calculate;
