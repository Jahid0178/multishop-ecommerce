import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartItem {
  product: Product;
  quantity: number;
}

interface ShoppingCart {
  isCartOpen: boolean;
  cartItems: CartItem[];
  totalAmount: number;
  quantity: number;
}

const initialState: ShoppingCart = {
  isCartOpen: false,
  cartItems: [],
  totalAmount: 0,
  quantity: 0,
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    openShoppingCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    addItemToCart: (state, action: PayloadAction<Product>) => {
      const isExist = state.cartItems.find(
        (item) => item.product.id === action.payload.id
      );

      if (isExist) {
        state.cartItems = state.cartItems.map((item) => {
          if (item.product.id === action.payload.id) {
            state.quantity += 1;
            const update = {
              ...item,
              quantity: item.quantity + 1,
            };
            return update;
          } else {
            return item;
          }
        });
      } else {
        const updatedCartItem: CartItem = {
          product: action.payload,
          quantity: 1,
        };

        state.cartItems.push(updatedCartItem);
        state.quantity += 1;
      }

      state.totalAmount = state.cartItems.reduce((total, item) => {
        return total + item.quantity * item.product.price;
      }, 0);
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.product.id === action.payload) {
          state.quantity += 1;
          const update = {
            ...item,
            quantity: item.quantity + 1,
          };
          return update;
        } else {
          return item;
        }
      });
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.product.id === action.payload) {
          if (item.quantity > 1) {
            state.quantity -= 1;
            const update = {
              ...item,
              quantity: item.quantity - 1,
            };
            return update;
          } else {
            return item;
          }
        } else {
          return item;
        }
      });
    },
    removeItemFromCart: (state, action: PayloadAction<CartItem>) => {
      const index = state.cartItems.findIndex(
        (item) => item.product.id === action.payload.product.id
      );

      if (index !== -1) {
        state.cartItems.splice(index, 1);
        state.quantity -= action.payload.quantity;
      }
    },
    getTotal: (state) => {
      state.totalAmount = state.cartItems.reduce((total, item) => {
        return total + item.quantity * item.product.price;
      }, 0);
    },
  },
});

export const {
  openShoppingCartOpen,
  addItemToCart,
  removeItemFromCart,
  increaseQuantity,
  decreaseQuantity,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
