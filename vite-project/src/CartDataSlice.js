import { createSlice } from "@reduxjs/toolkit";

const CartDataSlice = createSlice({
  name:"CartDataSlice",
  initialState:{
    items:[]
  },
  reducers:{
    addToCart : (state,action)=>{
      state.items.push(action.payload)
      console.log(JSON.stringify(state.items))
    },
  }
})

export const { addToCart } = CartDataSlice.actions;

export default CartDataSlice.reducer;