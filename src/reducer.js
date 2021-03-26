const defaultState = {
  count: 0,
  addCount: 0
};

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1
      };
    case "ADD":
      return {
        ...state,
        addCount: state.addCount + action.value
      };
    default:
      return state;
  }
};

export default rootReducer;
