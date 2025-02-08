import React from "react";
import ProductCard from "./ProductCard";

const ProductSection = () => {
  return (
    <div className="flex flex-col gap-6 mx-8 my-16">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-semibold pb-5">New Releases</h4>
        <div className=" px-3 py-2 border-2 border-primary flex items-center justify-center rounded-xl text-sm font-semibold">
          View All
        </div>
      </div>
      {/* Category Container */}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7 xl:grid-cols-6 xl:gap-8">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductSection;
