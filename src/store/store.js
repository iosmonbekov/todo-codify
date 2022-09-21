import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./cart-slice";

export default configureStore({
  reducer: {
    cart: counterReducer,
  },
});
