import React, { useState } from 'react';

const AddToCartButton = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);

    // Reset the animation after it finishes
    setTimeout(() => {
      setClicked(false);
    }, 600); // Match with animation duration
  };

  return (
    <button
      className={`px-6 py-3 text-white font-semibold text-lg rounded-full transition-all duration-300 transform ${
        clicked
          ? 'animate-bounce bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg'
          : 'bg-blue-500'
      } hover:bg-blue-600 active:scale-95 focus:outline-none`}
      onClick={handleClick}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
