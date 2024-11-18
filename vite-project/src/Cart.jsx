import React from 'react'
import { useSelector } from 'react-redux';
import CartDataSlice from './CartDataSlice';
import { IoMdStar } from "react-icons/io";

function Cart() {

  const Cartdata = useSelector((state)=>state.CartDataSlice)

  console.log(Cartdata.items[0].productData)

  const {discount,img,name,price,quantity,reviews:{count,rating},skinType} = Cartdata.items[0].productData

  return (
    <div className='pt-36 px-32 relative'>
      <div className='flex'>
      <img className='border-2 rounded' src={img} alt="" />
      <div className='ml-4'>
      <h1 className='text-2xl font-normal text-gray-700'>{name}</h1>
      <h1 className='text-xl mt-2 text-gray-400'>{skinType}</h1>
      <div className='flex text-lg mt-4 items-center '>
        {rating}
        <IoMdStar className='ml-1 text-yellow-400' />
        <h1 className='ml-3 text-base font-medium text-blue-500'>{count} Reviews</h1>
      </div>
      <h1 className='text-xl font-semibold text-green-600'>Special Price</h1>
      <div className='flex items-center mt-1 gap-4'>
        <h1 className='text-2xl font-semibold'>₹{price - (price * (discount / 100))}/-</h1>
        <h2 className='text-red-500 text-2xl font-semibold'>{discount}% Off</h2>
      </div>
      <div className='relative'>
      <h1 className='text-gray-400'>M.R.P : ₹{price} (inclusive of all taxes)</h1>
      <span className='w-10 h-[1px] ml-12 bg-gray-600 absolute top-1/2'></span>
      </div>
      <h1 className='text-base'>Net content: <span className='font-semibold'>{quantity}ml</span>  (usp: <span className='font-semibold'>₹{(price - (price * (discount / 100)))/quantity}/ml </span>)</h1>
      <div className='rounded-md mt-4 border-2 border-green-600 w-fit'>
        <h1 className='text-white pl-6 py-1 text-xl bg-green-600'>{quantity}ml</h1>
        <div className='flex  gap-4 px-6 py-4'>
        <h1 className='text-xl font-semibold'>₹{price - (price * (discount / 100))}/-</h1>
        <h2 className='text-red-500 text-xl font-semibold'>{discount}% Off</h2>
        
        </div>
        <div className='relative px-6'>
      <h1 className='text-gray-400'>M.R.P : ₹{price} (inclusive of all taxes)</h1>
      <span className='w-10 h-[1px] ml-12 bg-gray-600 absolute top-1/2'></span>
      </div>
      </div>
      </div>
      </div>
      <div className='absolute border px-6 py-4 right-36 top-72'>
      <h1 className='text-xl font-semibold text-green-600'>Special Price</h1>
      <div className='flex items-center mt-1 gap-2'>
        <h1 className='text-2xl font-semibold'>₹{price - (price * (discount / 100))}/-</h1>
        <h2 className='text-red-500 text-xl font-semibold'>{discount}% Off</h2>
        <div className='relative'>
      <h1 className='text-gray-400'>M.R.P : ₹{price}</h1>
      <span className='w-10 h-[1px] ml-12 bg-gray-600 absolute top-1/2'></span>
      </div>
      </div>
      <h1 className='text-gray-500'>(inclusive of all taxes)</h1>
      <div className='flex text-lg mt-2 items-center '>
        {rating}
        <IoMdStar className='ml-1 text-yellow-400' />
        <h1 className='ml-3 text-base font-medium text-blue-500'>{count} Reviews</h1>
      </div>
      <h1 className='text-xl font-semibold text-gray-500'>Single</h1>
      </div>
    </div>
  )
}

export default Cart