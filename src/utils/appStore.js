import { configureStore } from "@reduxjs/toolkit"
import cart1Reducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
  cart1 : cart1Reducer,
  }
}); 

export  default appStore;
