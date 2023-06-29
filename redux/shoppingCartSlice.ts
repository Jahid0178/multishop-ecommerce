import { ProductType } from "@/libs/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem extends ProductType {
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
  name: "shoppingCart",
  initialState,
  reducers: {
    openShoppingCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    addItem: (state, action: PayloadAction<ProductType>) => {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeByID: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increaseById: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decreaseById: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    increaseProductQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      }
    },
    decreaseProductQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item && item.quantity > action.payload.quantity) {
        item.quantity -= action.payload.quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addItem,
  removeByID,
  increaseById,
  decreaseById,
  increaseProductQuantity,
  decreaseProductQuantity,
  clearCart,
  openShoppingCartOpen,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
