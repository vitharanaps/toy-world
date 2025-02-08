import React from "react";
import FeaturedCard from "./FeaturedCard";

const FeaturedSection = () => {
  return (
    <div className="flex flex-col gap-6 mx-8 my-16">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-semibold pb-5">Featured Items</h4>
        <div className=" px-3 py-2 border-2 border-primary flex items-center justify-center rounded-xl text-sm font-semibold">
          View All
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-8 ">
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
      </div>
    </div>
  );
};

export default FeaturedSection;
