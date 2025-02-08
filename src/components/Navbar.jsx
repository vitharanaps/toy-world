import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaBell, FaCar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-8 h-[80px] ">
      {/* LEFT */}
      <div className="flex gap-3 w-1/5 ">
        <Image src="/img/logo.svg" alt="logo" width={20} height={20} />
        <h4 className="text-[24px] font-semibold">ToyWorld</h4>
      </div>
      {/* MID */}
      <div className="w-3/5 flex justify-center items-center">
        <div className=" flex items-center justify-center border-2 border-[#E5E7EB] h-[40px] w-fit rounded-xl gap-2 px-3">
          <CiSearch size={24} color="gray" />
          <input
            type="text"
            name="search"
            className=" w-[250px] outline-none placeholder-gray-500 "
            placeholder="Search Toys"
          />
        </div>
      </div>
      {/* RIGHT */}
      <div className=" w-1/5 flex items-center justify-end ">
        <div className="flex items-center justify-center gap-4">
          {/* item */}
          <div className="flex items-center justify-center relative cursor-pointer">
            <FaBell size={24} color="#4B5563" />
            <span className="w-5 h-5 bg-red-400 text-white font-semibold rounded-full flex items-center justify-center text-xs absolute -top-3 left-3">
              4
            </span>
          </div>

          {/* item */}
          <div className="flex items-center justify-center relative cursor-pointer">
            <FaHeart size={24} color="#4B5563" />
            <span className="w-5 h-5 bg-red-400 text-white font-semibold rounded-full flex items-center justify-center text-xs absolute -top-3 left-3">
              4
            </span>
          </div>
          {/* item */}
          <div className="flex items-center justify-center relative cursor-pointer">
            <FaShoppingCart size={24} color="#4B5563" />
            <span className="w-5 h-5 bg-red-400 text-white font-semibold rounded-full flex items-center justify-center text-xs absolute -top-3 left-3">
              4
            </span>
          </div> 
          {/* item */}
          <div className="flex items-center justify-center cursor-pointer">
            <FaUser size={24} color="#4B5563" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
