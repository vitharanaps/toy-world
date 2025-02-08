import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-[500px] w-full bg-green-200 relative">
      <Image
        src="/img/hero.jpg"
        alt="hero"
        width={1000}
        height={500}
        className="w-full h-[500px] object-cover contrast-80"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col gap-5 items-center justify-center bg-white bg-opacity-75 p-8 rounded-lg">
          <h4 className="text-4xl font-bold text-gray-800 tracking-wide">
            Holiday Special Gift For Your Orders
          </h4>
          <h6 className="text-2xl font-semibold text-gray-700 text-center">
            20% Off All LEGO Sets
          </h6>
          <div className="w-[250px] h-[50px] bg-[#FF6B6B] flex items-center justify-center rounded-lg shadow-md text-center cursor-pointer">
            <span className="text-white font-semibold">SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;