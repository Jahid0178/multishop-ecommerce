import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ShoppingCart {
  isCartOpen: boolean;
}

const initialState: ShoppingCart = {
  isCartOpen: false,
};

const shoppingCartSlice = createSlice({
  name: "ShoppingCart",
  initialState,
  reducers: {
    openShoppingCartOpen: (state) => {
      console.log("from slice");
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const { openShoppingCartOpen } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
