const initialState = {
  isModalShown: false,
  currentProduct: null,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_MODAL":
      return { ...state, isModalShown: action.state };

    case "SET_PRODUCT":
      return { ...state, currentProduct: action.product };

    default:
      return state;
  }
}

export default rootReducer;
