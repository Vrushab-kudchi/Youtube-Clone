const chanelReducer = (state = [], action) => {
  switch (action.type) {
    case "UPDATE_DATA":
      return state.map((state) =>
        state._id === action.payload._id ? action.payload : state
      );

    case "FETCH_CHANELS":
      return action.payload;

    default:
      return state;
  }
};

export default chanelReducer;
