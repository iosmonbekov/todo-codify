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
  return (dispatch, getState) => {
    const newCart = getState().cart;
    if (newCart.every((prod) => prod.id !== product.id)) {
      newCart.push(product);
    }

    return dispatch({ type: "SET_CART", newCart });
  };
};
export const deleteFromCart = (id) => {
  return (dispatch, getState) => {
    const newCart = getState().cart;
    const index = newCart.findIndex((product) => product.id === id);
    console.log(index);
    newCart.splice(index, 1);
    return dispatch({ type: "SET_CART", newCart });
  };
};
