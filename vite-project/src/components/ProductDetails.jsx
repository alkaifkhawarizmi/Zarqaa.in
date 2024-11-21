import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IoMdStar } from "react-icons/io";
import AddToCartButton from './AddToCartButton';
import { useNavigate } from "react-router-dom";

function ProductDetails() {

  const { id } = useParams();

  const data = useSelector((state) => state.ProductDataSlice);


  const productData =  data.data.filter((item) => item.name == id) ;

  console.log(productData[0])

  let totalPrice = 0
  let finalPrice = 0;

  const navigate = useNavigate();

  function goBack(){
    navigate("/")
  }

  return (
    <div className="pt-36 px-32 relative">
          
          <div className="w-[800px]">
          <div className="flex gap-4 mt-14">
            <img className="border-2 shadow-xl rounded" src={productData[0].img} alt="" />
            <div className="ml-4">
              <h1 className="text-2xl font-normal text-gray-700">{productData[0].name}</h1>
              <h1 className="text-xl mt-2 text-gray-400">{productData[0].skinType}</h1>
              <div className="flex text-lg mt-4 items-center ">
                {productData[0].reviews.rating}
                <IoMdStar className="ml-1 text-yellow-400" />
                <h1 className="ml-3 text-base font-medium text-blue-500">
                  {productData[0].reviews.count} Reviews
                </h1>
              </div>
              <h1 className="text-xl font-semibold text-green-600">Special Price</h1>
              <div className="flex items-center mt-1 gap-4">
                <h1 className="text-2xl font-semibold">
                  ₹
                  {productData[0].price -
                    (productData[0].price * (productData[0].discount / 100))}
                  /-
                </h1>
                <h2 className="text-red-500 text-2xl font-semibold">
                  {productData[0].discount}% Off
                </h2>
              </div>
              <div className="relative">
                <h1 className="text-gray-400">
                  M.R.P : ₹{productData[0].price} (inclusive of all taxes)
                </h1>
                <span className="w-10 h-[1px] ml-12 bg-gray-600 absolute top-1/2"></span>
              </div>
              <h1 className="text-base">
                Net content:{" "}
                <span className="font-semibold">{productData[0].quantity}ml</span>{" "}
                (usp:{" "}
                <span className="font-semibold">
                  ₹
                  {(
                    (productData[0].price -
                      productData[0].price * (productData[0].discount / 100)) /
                    productData[0].quantity
                  ).toFixed(2)}
                  /ml
                </span>
                )
              </h1>
              <div className="flex items-center justify-between">
              <div className="rounded-md mt-4 border-2 border-green-600 w-fit">
                <h1 className="text-white pl-6 py-1 text-xl bg-green-600">
                  {productData[0].quantity}ml
                </h1>
                <div className="flex  gap-4 px-6 py-4">
                  <h1 className="text-xl font-semibold">
                    ₹
                    {productData[0].price -
                      productData[0].price * (productData[0].discount / 100)}
                    /-
                  </h1>
                  <h2 className="text-red-500 text-xl font-semibold">
                    {productData[0].discount}% Off
                  </h2>
                </div>
                <div className="relative px-6">
                  <h1 className="text-gray-400">
                    M.R.P : ₹{productData[0].price} (inclusive of all taxes)
                  </h1>
                  <span className="w-10 h-[1px] ml-12 bg-gray-600 absolute top-1/2"></span>
                </div>
              </div>
              
              </div>
            </div>
          </div>
        </div>

        <div className="fixed border-2 shadow-xl w-[400px] px-6   py-4 right-20 top-48">
            <h1 className="text-xl font-semibold text-green-600">Price Summary</h1>
            <div className="flex mt-2 text-lg font-semibold text-gray-600 justify-between"> 
            <h1>Order Total : </h1>
            <h1>₹{productData[0].price}/-</h1>
            </div>
            <div className="flex mt-2 text-lg font-semibold text-gray-600 justify-between"> 
            <h1>Items Discount : </h1>
            <h1 className="text-green-600">₹{productData[0].price - productData[0].finalPrice}/-</h1>
            </div>
            <div className="flex mt-2 text-lg font-semibold text-gray-600 justify-between"> 
            <h1>Shipping : </h1>
            <h1 className="text-green-600">Free</h1>
            </div>
            <div className="flex mt-2 text-lg font-semibold text-gray-600 justify-between"> 
            <h1>5% Online Payment Discount : </h1>
            <h1 className="text-green-600">₹{((5/100)*productData[0].price).toFixed(2)}/-</h1>
            </div>
            <div className="flex mt-2 text-xl font-semibold  justify-between"> 
            <h1>To Pay : </h1>
            <h1>₹{productData[0].finalPrice-((5/100)*productData[0].price).toFixed(2)}/-</h1>
            </div>
            <h1 className="mt-4 text-base">Congratulations you are saving <span className="text-green-800 font-medium">₹{productData[0].price - productData[0].finalPrice}</span> on this order </h1>
            <div className="flex items-center justify-between">

            <div className='mt-8'>
            <AddToCartButton productData={productData} />
            </div>
            
            <button onClick={()=>goBack()} className="flex items-center mt-8 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-300">
              Go Back
            </button>

            </div>
          </div>
      
    </div>
  )
}

export default ProductDetails