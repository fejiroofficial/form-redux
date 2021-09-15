const initialState = {
  name: null,
};

const formReducer = (state = initialState, action = {}) => {
  if (action.type === "SUBMIT_NAME") {
    return {
      ...state,
      name: action.payload,
    };
  } else {
    return state
  }
};

export default formReducer;
