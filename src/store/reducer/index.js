const initialState = {
  isModalShown: false,
  currentProduct: null,
  cart: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_MODAL":
      return { ...state, isModalShown: action.state };

    case "SET_PRODUCT":
      return { ...state, currentProduct: action.product };

    case "SET_CART":
      return { ...state, cart: action.newCart };

    default:
      return state;
  }
}

export default rootReducer;
