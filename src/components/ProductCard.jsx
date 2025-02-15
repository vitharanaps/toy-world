import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";

const ProductCard = () => {
  return (
    <div className="w-full h-[300px] cursor-pointer">
      {/* img container */}
      <Image
        src="/img/toy1.jpg"
        alt="toy1"
        width={330}
        height={350}
        className="w-full h-[180px] object-cover rounded-t-lg"
      />
      {/* text container */}
      <div className="w-full flex flex-col gap-3 py-2">
        <h4 className="text-sm font- tracking-wide">
          Robot X400 Sed fdsfdsf dsfdsf 
        </h4>
        <div className="flex items-center gap-3">
            <div className="flex items-center gap-[2px]">
              <FaStar size={14} color="gold" />
              <FaStar size={14} color="gold" />
              <FaStar size={14} color="gold" />
              <FaStar size={14} color="gold" />
              <FaStar size={14} color="gold" />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm">4.6</span>
              <h6 className=" font-semibold text-sm ">(35)</h6>
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

export default ProductCard;
