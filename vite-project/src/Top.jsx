import React from "react";
import { FaTruckFast } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";

function TopOfferDiv() {
  return (
    <div>
    <div className="bg-[#F5F5F5] flex items-center justify-center p-4 gap-8 border-b-2 border-gray-250">
      <div className="flex items-center gap-3 font-medium text-gray-500 text-sm">
        <FaTruckFast />
        <h1>Free Domestic Shipping On Order Of ₹500+</h1>
      </div>
      <div className="flex items-center gap-3 font-medium text-gray-500 text-sm">
      <IoBagHandle /> 
      <h1>Clean Crew Rewards</h1>
      </div>
    </div>
    <div className="text-sm cursor-pointer font-normal flex items-center justify-center p-3 border-b-2 border-gray-250 text-gray-700 hover:bg-red-50 hover:border-y hover:border-black">
      <h1>FREE GIFT OF CHOICE ON ORDER ₹1000+ | SHOP NOW</h1>
    </div>
    </div>
  );
}

export default TopOfferDiv;
