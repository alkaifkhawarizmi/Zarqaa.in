import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartDataSlice from '../CartDataSlice';

const navitems = [
  {name:"HOME",path:"/"},
  {name:"CART",path:"/cart"},
  {name:"LOG IN",path:"/account"},
  {name:"INGREDIENTS",path:"/ingredients"},
  {name:"TRACK ORDER",path:"/track-order"},
  {name:"ABOUT US",path:"/about-us"},
  {name:"CONTACT US",path:"/contact-us"},
  {name:"RETURNS & EXCHANGES",path:"/returns-and-changes"},
]

function Nav() {

  const [currentNav,setcurrentNav] = useState("HOME")

  function handleCurrentNav(item) {
    setcurrentNav(item)
  }

  const cartData = useSelector((state)=>state.CartDataSlice)

  const data = JSON.parse(localStorage.getItem("cartData"))

  console.log(cartData, data)

  return (
    <div className='shadow-2xl z-40 fixed w-screen bg-white'>
    <div className='flex border-b-2 justify-between px-32 py-4'>
      <div className='w-full flex relative '>
        <h1 className='text-2xl font-bold'>Zarqaa.in</h1><h1 className='absolute bottom-[-12px] text-sm text-gray-600 '>Delivery across india</h1>

        <input className='px-28 ml-12 border border-gray-500 rounded-l-lg ml-12 outline-none text-left' type="text" placeholder= "Search Produtcs" />
        {/* <CiSearch className="" /> */}
        <button className='flex gap-2 bg-[#00AFEF] rounded-r-lg py-1 px-4 items-center text-xl'>{<CiSearch />}Search</button>
        </div>
          <img className='absolute w-16 right-[30%]' src="/public/Screenshot (38).png" alt="" />
      <div className='text-3xl flex items-center gap-10'>
      <Link to="/cart">
      <h1 className='flex gap-2'><FiShoppingCart className='text-blue-600 text-2xl' />
      <span className='text-base font-semibold'>Cart</span>
      <span className={`absolute bg-green-400 right-56 top-2 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center ${cartData.items.length == 0 ? "hidden" : "block"}`}>{cartData.items.length}</span>
      </h1>
      </Link>
      <Link to="/account">
      <h1 className='flex gap-2 items-center'><VscAccount className='text-blue-600 text-2xl' /><span className='text-base font-semibold'>Login</span></h1>
      </Link>
      
      </div>
    </div>
    <div className='flex py-3 items-center justify-around'>
      {
        navitems.map((item,index)=>(
          <Link to={item.path}>
          <h1 onClick={()=>handleCurrentNav(item.name)} key={index} className={`font-semibold text-sm ease-in-out cursor-pointer text ${currentNav === item.name ? "text-blue-600 " : "text-gray-700"}`}>{item.name}</h1>
          </Link>
          
        ))
      }
    </div>
    </div>
  )
}

export default Nav