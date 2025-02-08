import React from "react";
import CategoryCard from "./CategoryCard";

const CategorySection = () => {
  return (
    <div className=" flex flex-col gap-6 mx-8 my-10">
      <h4 className="text-lg font-semibold pb-5">Shop by Category</h4>
      {/* Category Container */}
      <div className="grid  grid-cols-3 md:grid-cols-5 md:gap-5 xl:grid-cols-9 xl:gap-5">
        <CategoryCard />
        <CategoryCard /> 
        <CategoryCard /> 
        <CategoryCard /> 
        <CategoryCard />
        <CategoryCard /> 
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
};

export default CategorySection;
