import { connect } from "react-redux";

const Add = (props) => {
  return (
    <>
      <input type="button" onClick={props.addCount} value="Add"></input>
      <p>{props.cnt}</p>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    cnt: state.addCount
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCount: () => dispatch({ type: "ADD", value: 2 })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Add);
