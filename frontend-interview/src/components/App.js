/* eslint-disable */
import React, { Component } from "react";
import Express from "../views/Express";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as calcActions from "../store/modules/Calc";

class App extends Component {
  state = {
    multiply: 12,
    substract: null
  };

  componentDidMount() {
    this.init();
  }

  _handleDetecting = () => {
    // 기존의 코드를 유지하였습니다.
  };

  _handleShow = val => {
    var { CalcActions } = this.props;
    if (val == "") {
      return null;
    } else {
      this.setState({ plus: 33 }, () => CalcActions.showAction(val));
      // setState작업이 비동기로 처리되기에 콜백함수로 받아서 사용하게 변경하였습니다.
    }
  };

  setStating({ sNumber }) {
    // 첫번째 인자로 들어온 객체안에 sNumber가 있다면 담도록 변경하였습니다.
    return {
      sNumber: sNumber || 13,
      // sNumber이 없다면 기존의 13의 값을 유지하도록 수정하였습니다.
      pass: function() {
        var substract;
        return (substract = this.sNumber);
      }
    };
  }

  init() {
    var substract = this.setStating.call(this, { sNumber: -33 }).pass();
    // call을 이용한 실행이 불필요하다고 생각되어 제거하려고 하였으나,
    // 기존의 코드를 삭제하는것보다 추가하여 동작시키는 것이 좋다고 판단하여
    // this를 통해 실행하도록 하였습니다.
    this.setState({ substract });
  }

  render() {
    var { source, show } = this.props;
    var { multiply, substract, plus } = this.state;
    return (
      //componentDidMount에서 state를 변경하고 난 이후에 view가 그려지도록 수정하였습니다.
      substract && (
        <Express
          source={source}
          multiply={multiply}
          show={show}
          plus={plus}
          substract={substract}
          handleShow={this._handleShow}
        />
      )
    );
  }
}

var mapStateToProps = state => ({
  source: state.Calc.get("source"),
  show: state.Calc.get("show")
});

var mapDispatchToProps = dispatch => ({
  CalcActions: bindActionCreators(calcActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
