import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "../slice/orderSlice";
import cartReducer from "../slice/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
  },
});

export default store;
