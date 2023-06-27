import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface CartItem {
  id: number;
  name: string;
  price: number;
  imag: string;
  quantity: number;
}
interface ShoppingCart {
  isCartOpen: boolean;
  items: CartItem[];
}

const initialState: ShoppingCart = {
  isCartOpen: false,
  items: [],
};

const shoppingCartSlice = createSlice({
  name: "ShoppingCart",
  initialState,
  reducers: {
    openShoppingCartOpen: (state) => {
      console.log("from slice");
      state.isCartOpen = !state.isCartOpen;
    },
    addItemToCart: (state, action: PayloadAction<CartItem>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItemFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
  },
});

export const {
  openShoppingCartOpen,
  addItemToCart,
  removeItemFromCart,
  increaseQuantity,
} = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
