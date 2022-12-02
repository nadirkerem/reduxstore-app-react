import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allProducts: [],
  singleProduct: {},
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      return {
        ...state,
        allProducts: action.payload,
      };
    },
    selectedProduct: (state, action) => {
      return {
        ...state,
        singleProduct: action.payload,
      };
    },
    removeSelectedProduct: (state) => {
      return {
        ...state,
        singleProduct: {},
      };
    },
  },
});

export const { setProducts, selectedProduct, removeSelectedProduct } =
  productSlice.actions;

export default productSlice.reducer;
