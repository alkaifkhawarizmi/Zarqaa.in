// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import ProductDataSlice from './ProductDataSlice';
import CartDataSlice from './CartDataSlice';

const store = configureStore({
  reducer: {
    ProductDataSlice,
    CartDataSlice, // Add reducers here
  },
});

export default store;
