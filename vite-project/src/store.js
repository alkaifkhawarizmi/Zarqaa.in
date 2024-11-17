// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import ProductDataSlice from './ProductDataSlice';

const store = configureStore({
  reducer: {
    ProductDataSlice, // Add reducers here
  },
});

export default store;
