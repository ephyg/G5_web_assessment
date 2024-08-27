import React from "react";
import Button from "../Button/button";
interface FilterBlogProps {
  text: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterBlog = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-10">
      <input
        type="text"
        placeholder="Search"
        className="w-full sm:w-[200px] md:w-[200px] lg:w-[300px] px-4 py-2 border border-gray rounded-full shadow-sm placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-1 focus:ring-gray"
      />
      <Button text="+ New Blog" classname="bg-blue text-white py-2 px-10 rounded-full" />
    </div>
  );
};

export default FilterBlog;
