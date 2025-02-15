import React from "react";

const Footer = () => {
  return (
    <div className="w-full px-8 bg-[#1F2937] py-10 flex flex-col items-center justify-center gap-10">
      {/* top */}
      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-4">
        {/* Left */}
        <div className=" flex flex-col  gap-3">
          <h3 className="text-sm font-semibold text-white">About ToyWorld</h3>
          <p className="text-xs text-gray-200">
            Making playtime magical with quality toys and exceptional service
            since 2010.
          </p>
          <div>
            social
          </div>
        </div>
        {/* middle */}
        <div className="flex flex-col  gap-3">
        <h3 className="text-sm font-semibold text-white">Customer Service</h3>
         <ul className="flex flex-col gap-1 text-xs text-gray-200 ">
            <li>Contact Us</li>
            <li>Shipping Policy</li>
            <li>Return And Exchange</li>
            <li>FAQ</li>
         </ul>
        </div>
        {/* right */}
        <div className="flex flex-col  gap-3 ">
        <h3 className="text-sm font-semibold text-white">Quick Links</h3>
         <ul className="flex flex-col gap-1 text-xs text-gray-200 ">
            <li>About Us</li>
            <li>Blog</li>
            <li>Store Locator</li>
            <li>Gift Cards</li>
         </ul>
        </div>

        <div className="flex flex-col  gap-3 ">
        <h3 className="text-sm font-semibold text-white">Contact Us</h3>
         <ul className="flex flex-col gap-1 text-xs text-gray-200 ">
            <li>+944668478</li>
            <li>toystore@gmail.com</li>
          
         </ul>
        </div>
      </div>

      {/* bottom */}
      <div>
      <h3 className="text-xs font-semibold text-gray-50">   © 2024 ToyWorld. All rights reserved.</h3>
      </div>
    </div>
  );
};

export default Footer;
