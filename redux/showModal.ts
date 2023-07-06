import { ProductType } from "./../libs/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface ShowModal {
  isModalOpen: boolean;
  product: ProductType;
}
const initialState: ShowModal = {
  isModalOpen: false,
  product: {} as ProductType,
};

const showModalSlice = createSlice({
  name: "showModal",
  initialState,
  reducers: {
    openProductModal: (state, action: PayloadAction<ProductType>) => {
      state.isModalOpen = true;
      state.product = action.payload;
    },
    closeProductModal: (state) => {
      state.isModalOpen = false;
    },
  },
});
export const { openProductModal, closeProductModal } = showModalSlice.actions;

export default showModalSlice.reducer;
