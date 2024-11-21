import React from 'react'
import { IoIosStar } from "react-icons/io";
import AddToCartButton from './AddToCartButton';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Product({productData}) {

  // console.log(productData)

  const {discount,img,name,price,quantity,reviews:{count,rating},skinType} = productData

  const finalPrice = price - (price * (discount / 100));


  return (
    <div className='mt-4 w-fit mb-4 cursor-pointer'>
      <Link to={`/product/${name}`}>
      <div className='w-80 border-2 border-gray-200 hover:shadow-2xl p-2 min-h-[640px]'>
        <img src={img} alt="" />
        <h1 className='text-center text-gray-700 text-lg font-semibold'>{name}</h1>
        <h1 className='text-green-600 text-center'>{skinType}</h1>
        <p className='text-center text-lg mt-4 font-medium text-gray-800 '>{quantity}ml</p>
        <div className='flex mt-2 items-center justify-center'>
        <IoIosStar className='text-yellow-400' />
        <p className='font-semibold text-sem text-gray-700'>{rating}</p>
        <p className='ml-4 text-gray-600 font-semibold'>{count}+ reviews</p>
        </div>
        <div className='relative mt-2'>
          <div className='text-xl text-semibold text-gray-400 text-center'>
            ₹{price}
            <span className='w-10 h-[1px] bg-black absolute right-44 top-1/2'></span>
            <span className='px-1 ml-4 bg-green-200 text-green-600'>{discount}% Off</span>
          </div>
        </div>
        <h1 className='text-2xl text-center mt-2 font-semibold text-gr'>₹{finalPrice}/-</h1>
      </div>
      </Link>
      <div className='flex items-center mt-2 justify-center'>
         <AddToCartButton productData={productData} />
      </div>
     
    </div>
  )
}

export default Product