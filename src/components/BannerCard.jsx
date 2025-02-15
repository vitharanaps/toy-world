import Image from "next/image";
import React from "react";

const BannerCard = ({ color, title, img, subTitle }) => {
  return (
    <div
      className="w-full md:w-1/3 h-[200px] rounded-xl shadow-md pl-5 py-3 gap-4"
      style={{ backgroundColor: color }}
    >
      <div className="px-3 py-2 w-full h-full flex items-center justify-between gap-2">
        <div className="flex flex-col gap-3 h-full w-2/3">
          <h3 className="text-2xl">{title}</h3>
          <h6 className="text-sm">{subTitle}</h6>
          <div className=" flex items-center justify-center w-[100px] h-[40px] bg-yellow-300  rounded-lg  cursor-pointer ">
        <p className="text-sm font-semibold">Shop Now</p>
      </div>
        </div>
        <Image
          src={img}
          width={300}
          height={300}
          alt="BannerImage"
          className="w-1/3 h-full object-cover"
        />
      </div>
   
    </div>
  );
};

export default BannerCard;
