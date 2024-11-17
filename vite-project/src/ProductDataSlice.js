// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const ProductDataSlice = createSlice({
  name: 'ProductDataSlice',
  initialState: {
    data:[{
      name:"Zarqaa Vitamin C Glow Serum - Infused with Vitamin C & Hyaluronic Acid for Bright, Hydrated, and Radiant Skin!",
      img:"https://images.mamaearth.in/catalog/product/v/i/vitamin-c-glow-serum_1.jpg?format=auto&width=400&height=400",
      skinType:"Enriched with 50X Vitamin C* | Brightens Skin",
      quantity:"30",
      reviews:{rating:4.5,count:100},
      price:300,
      discount:10,
    },
  {
    name:"Zarqaa SunKissed Glow Serum Brighten and rejuvenate your skin with the power of Vitamin C",
      img:"https://images.mamaearth.in/catalog/product/v/i/vit_c_glow_sunscreen1_white_bg_1.jpg?format=auto&width=400&height=400",
      skinType:"SPF 50 & PA++++ Protection | Adds Natural Glow",
      quantity:"50",
      reviews:{rating:5,count:175},
      price:350,
      discount:12,
  },
{
  name:"Zarqaa Citrus Glow Elixir Packed with Vitamin C and antioxidants for bright, healthy skin",
      img:"https://images.mamaearth.in/catalog/product/v/i/vit-c-face-wash-with-ingredient.jpg?format=auto&width=400&height=400",
      skinType:"Brightens Skin | Evens Skin Tone| Makes Skin Glow",
      quantity:"100",
      reviews:{rating:4.8,count:750},
      price:269,
      discount:13,
}]
  },
  reducers:{
    addData: (state,action)=>{
      state.data = action.payload 
    }
  }
});

export const {addData} = ProductDataSlice.actions;

export default ProductDataSlice.reducer;
