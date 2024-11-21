import { createSlice } from "@reduxjs/toolkit";

const CartDataSlice = createSlice({
  name:"CartDataSlice",
  initialState:{
    items:JSON.parse(localStorage.getItem("cartData")) || [] 
  },
  reducers:{
    addToCart : (state,action)=>{
      state.items.push(action.payload)
      const data = [...state.items, action.payload]
      localStorage.setItem("cartData", JSON.stringify(state.items));
    },
    removeCart : (state,action)=>{
      state.items.splice(action.payload,1)
      localStorage.setItem("cartData", JSON.stringify(state.items));
    },
    clearCart : (state,action)=>{
      state.items = []
      localStorage.clear()
    }
  }
})

export const { addToCart ,removeCart ,clearCart } = CartDataSlice.actions;

export default CartDataSlice.reducer;