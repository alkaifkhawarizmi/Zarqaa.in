import React from 'react'
import { HiOutlineUser } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";

const nav = [
  {name:"SHOP SKINCARE",path:"/"},
  {name:"BESTSELLERS",path:"/"},
  {name:"OFFERS",path:"/"},
  {name:"EARN REWARDS",path:"/"},
  {name:"ABOUT US",path:"/"}
]
function Head() {
  return (
    <div>
    <div className='p-4 px-8 flex justify-between items-center'>
      <div className='flex w-[40%] items-center gap-2 font-semibold text-gray-600'>
        <HiOutlineUser className='text-xl' />
        <h1>SIGN IN</h1>
      </div>
        <div className='text-5xl w-[20%] flex items-center gap-4'>
          <h1>Zarqaa.in</h1>
          <img className='w-20 mt-2' src=".\public\Screenshot (38).png" alt="" />
          </div>
      <div className='flex w-[40%] justify-end items-center gap-8 text-2xl text-gray-600'>
          <IoSearch />
       <span className='flex items-center gap-2'><FaRegHeart />
       <h1 className='text-lg font-semibold'>WISHLIST</h1></span>
       <span className='flex items-center gap-2'><IoBagHandleSharp />
       <h1 className='text-lg font-semibold'>BAG</h1></span>
      </div>
    </div>
    <div className='flex items-center justify-center gap-8 mt-4'>
      {
        nav.map((item, index) => (
          <h1 key={index} className='font-semibold text-gray-600 cursor-pointer'>{item.name}</h1>
        ))
      }
    </div>
    </div>
  )
}

export default Head