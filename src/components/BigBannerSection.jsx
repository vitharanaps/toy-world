
import CountdownTimer from "@/helpers/CountdownTimer";
import Image from "next/image";
import React from "react";

const BigBannerSection = ({
  title,
  subTitle,
  buttonText,
  imgLeft,
  imgRight,
  percentage,
  value,
}) => {
  return (
    <div className="w-full h-[300px] flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="w-full flex items-center justify-center">
        {/* Left Container */}
        {/* <div>
          <Image
            src={imgLeft}
            alt="imgLeft"
            width={300}
            height={300}
            className="h-[300px] object-cover bg-center"
          />
        </div> */}

        <div className="flex items-center justify-between gap-3 flex-col ">
          <h4 className="text-white text-4xl font-semibold">{title}</h4>
          <h6 className="text-gray-200 text-lg font-normal">{subTitle}</h6>
          <CountdownTimer targetDate="2025-12-31T23:59:59" />
          <div className="px-3 py-2 bg-yellow-300 w-fit rounded-lg shadow-md cursor-pointer">
            <span className="font-bold tracking-wide">{buttonText}</span>
          </div>
          {/* <div className=" bg-red-400 w-[200px] h-[200px] p-3 flex items-center justify-center rounded-full ">
            <h3 className="text-[40px] text-white">{value}</h3>
            {percentage ? <h2 className="text-[40px] text-white">%</h2> : null}
          </div> */}
        </div>

        {/* Right Container
        <div>
          <Image
            src={imgLeft}
            alt="imgLeft"
            width={300}
            height={300}
            className="h-[300px] object-cover bg-center"
          />
        </div> */}
      </div>
    </div>
  );
};

export default BigBannerSection;
