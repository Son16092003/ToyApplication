import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "../slice/orderSlice";
import cartReducer from "../slice/cartSlice";
import userReducer from "../slice/userSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    order: orderReducer,
    user : userReducer,
  },
});

export default store;
