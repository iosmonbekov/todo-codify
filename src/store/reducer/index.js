const initialState = {
  isModalShown: false,
  currentProduct: null,
<<<<<<< HEAD
  cart: []
=======
  cart: [],
>>>>>>> f79ba87509065b033dfe3afa82e4c770cbf118da
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_MODAL":
      return { ...state, isModalShown: action.state };

    case "SET_PRODUCT":
      return { ...state, currentProduct: action.product };

<<<<<<< HEAD
      case "SET_CART":
      return { ...state, cart: action.cart };
=======
    case "SET_CART":
      return { ...state, cart: action.newCart };
>>>>>>> f79ba87509065b033dfe3afa82e4c770cbf118da

    default:
      return state;
  }
}

export default rootReducer;
