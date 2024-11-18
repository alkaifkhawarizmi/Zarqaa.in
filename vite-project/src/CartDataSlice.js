import { createSlice } from "@reduxjs/toolkit";

const CartDataSlice = createSlice({
  name:"CartDataSlice",
  initialState:{
    items:[]
  },
  reducers:{
    addToCart : (state,action)=>{
      state.items.push(action.payload)
      // console.log(JSON.stringify(state.items))
    },
    removeCart : (state,action)=>{
      state.items = []
      //  console.log(JSON.stringify(state.items))
    },
  }
})

export const { addToCart ,removeCart } = CartDataSlice.actions;

export default CartDataSlice.reducer;