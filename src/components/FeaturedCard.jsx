import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";

const FeaturedCard = () => {
  return (

    <div className="w-full h-[100px] flex items-center  gap-3">
      {/* Left Side */}
      <div className="w-1/3 h-[100px]">
        <Image
          src="/img/toy1.jpg"
          alt="Featured"
          width={500}
          height={500}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right Side */}
      <div className="w-2/3 h-full flex flex-col gap-1 ">
        <h4 className="font-semibold text-sm">New Featured Items In our Application</h4>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <FaStar size={16} color="gold" />
              <FaStar size={16} color="gold" />
              <FaStar size={16} color="gold" />
              <FaStar size={16} color="gold" />
              <FaStar size={16} color="gold" />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm">4.6</span>
              <h6 className=" font-semibold text-sm ">(35)</h6>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between ">
          <span className="text-primary text-xs">$ 25.00</span>
          <div className="bg-primary px-3 py-2 text-xs text-white rounded-xl shadow-md">
            Add to Cart
          </div>
        </div>
      </div>
    </div>

  );
};

export default FeaturedCard;
