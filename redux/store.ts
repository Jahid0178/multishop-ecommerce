import { configureStore } from "@reduxjs/toolkit";
import shoppingCartSlice from "./shoppingCartSlice";
import showModalSlice from "./showModal";
const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartSlice,
    modal: showModalSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
