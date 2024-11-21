import React from 'react'

function Bottom() {
  return (
    <div className='mt-10'>
      <div >
        <h1 className='text-center w-fit mx-auto text-3xl font-semibold  bg-gradient-to-r from-green-100 to-green-700 text-transparent bg-clip-text '>Premium Pure Promise</h1>
        <div className='flex items-center justify-between px-12 mt-8'>
          <div className='flex gap-4 items-center'>
            <img src="https://images.mamaearth.in/wysiwyg/dermatology-tested-100x100.png" alt="" />
            <div>
            <h1 className='text-xl font-semibold'>Dermatologically Tested</h1>
            <p className='font-semibold text-gray-600'>We ensure each product is tested <br /> clinically on the sensitive human skin to <br /> ensure that it is not allergic.</p>
            </div>
          </div>
          <div>
          <div className='flex gap-4 items-center'>
            <img src="https://images.mamaearth.in/wysiwyg/msafe-100x100.jpg" alt="" />
            <div>
            <h1 className='text-xl font-semibold'>Made Safe Certified</h1>
            <p className='font-semibold text-gray-600'>The MADE SAFE <br /> (Made with Safe Ingredients™) seal means that a product is <br /> literally made with safe ingredients.</p>
            </div>
          </div>
          </div>
          <div>
          <div className='flex gap-4 items-center'>
            <img src="https://images.mamaearth.in/wysiwyg/fda-100x100.jpg" alt="" />
            <div>
            <h1 className='text-xl font-semibold'>FDA Approved</h1>
            <p className='font-semibold text-gray-600'>Zarqaa is FDA approved, which <br /> means we are 100% safe to be used for <br /> babies as well as mamas.</p>
            </div>
          </div>
          </div>
        </div>

      </div>
      <div className='mt-10'>
      <h1 className='text-center w-fit text-3xl font-semibold  bg-gradient-to-r from-blue-100 to-blue-700 text-transparent bg-clip-text mx-auto '>What Our Customer Say</h1>
      <div>
        {/* review shows here */}
      </div>
      </div>
    </div>
  )
}

export default Bottom