export const setIsModalShown = (state) => {
  return (dispatch) => {
    return dispatch({ type: "SET_MODAL", state });
  };
};
export const setIsCurrentProduct = (product) => {
  return (dispatch) => {
    return dispatch({ type: "SET_PRODUCT", product });
  };
};

export const addToCart = (product) => {
  return (dispatch, getstate) => {
    console.log(getState())
    // return dispatch({ type: "SET_CART", product });
  };
};
