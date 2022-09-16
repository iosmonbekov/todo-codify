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
