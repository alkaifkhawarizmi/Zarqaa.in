import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";

const navitems = [
  {name:"HOME",path:"/"},
  {name:"COMBOS",path:"/"},
  {name:"NEW LAUNCHES",path:"/"},
  {name:"INGREDIENTS",path:"/"},
  {name:"PLANT GOODNESS",path:"/"},
  {name:"ABOUT US",path:"/"},
  {name:"CONTACT US",path:"/"},
  {name:"RETURNS & EXCHANGES",path:"/"},
]

function Nav() {

  const [currentNav,setcurrentNav] = useState("HOME")

  function handleCurrentNav(item) {
    setcurrentNav(item)
  }

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
      <h1 className='flex gap-2'><FiShoppingCart className='text-blue-600 text-2xl' /><span className='text-base font-semibold'>Cart</span></h1>
      
      <h1 className='flex gap-2 items-center'><VscAccount className='text-blue-600 text-2xl' /><span className='text-base font-semibold'>Login</span></h1>
      
      </div>
    </div>
    <div className='flex py-3 items-center justify-around'>
      {
        navitems.map((item,index)=>(
          
          <h1 onClick={()=>handleCurrentNav(item.name)} key={index} className={`font-semibold text-sm ease-in-out cursor-pointer text ${currentNav === item.name ? "text-blue-600 " : "text-gray-700"}`}>{item.name}</h1>
          
        ))
      }
    </div>
    </div>
  )
}

export default Nav