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
      state.items.splice(action.payload,1)
      //  console.log(JSON.stringify(state.items))
    },
    clearCart : (state,action)=>{
      state.items = []
    }
  }
})

export const { addToCart ,removeCart ,clearCart } = CartDataSlice.actions;

export default CartDataSlice.reducer;