import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../CartDataSlice";

const AddToCartButton = (productdata) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);

    // Reset the animation after it finishes
    setTimeout(() => {
      setClicked(false);
    }, 800); // Adjust to match animation duration
  };

  const data = useSelector((state) => state.CartDataSlice)


  const dispatch = useDispatch();

  function handleAddToCart() {
    
    if (data.items.some(item => item.productData.id === productdata.productData.id)) {
      alert("Already added to cart");
    } 

    else{
      dispatch(addToCart(productdata));
    }
      
  }

  return (
    <div onClick={handleAddToCart}>
      <button
        className={`px-10 py-3 text-white font-semibold text-lg rounded-md transition-all duration-300 transform ${
          clicked
            ? "scale-105 bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md"
            : "bg-blue-500"
        } hover:bg-blue-600 active:scale-95 focus:outline-none`}
        onClick={handleClick}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCartButton;
