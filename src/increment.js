import { connect } from "react-redux";
import React from "react";
class Inc extends React.Component {
  render() {
    return (
      <>
        <input
          type="button"
          onClick={this.props.onIncrement}
          value="increment"
        ></input>
        <p>{this.props.cnt}</p>
      </>
    );
  }
}

const Increment = () => {
  return { type: "INCREMENT" };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(Increment())
  };
};

const mapStateTpProps = (state, ownprops) => {
  console.log(ownprops);
  return {
    cnt: state.count
  };
};

export default connect(mapStateTpProps, mapDispatchToProps)(Inc);
