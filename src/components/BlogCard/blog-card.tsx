import React from "react";
import Avatar from "../Avatar/avatar";
import Image from "next/image";
import Button from "../Button/button";

const BlogCard = () => {
  return (
    <div className="flex flex-col px-5 lg:px-40 font-montserrat">
      <div className="flex items-center gap-4  border-t border-[#dfdddd] pt-5">
        <Avatar classname="w-[70px] h-[70px]"/>
        <div className="flex flex-col gap-2">
          <div className="flex gap-3 items-center">
            <h1 className="text-black font-bold">Yididiya Kebede</h1>
            <div className="h-1 w-1 rounded-full bg-gray"></div>
            <span className="text-gray text-sm">Apr 16, 2022</span>
          </div>
          <span className="text-gray text-sm">SOFTWARE ENGINEER</span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex flex-col gap-2">
          <span className="font-bold text-xl text-wrap w-full md:w-4/5">
            The essential guide to Competitive Programming Tab System On React :
            3 ways to do it.
          </span>
          <span className="text-gray text-lg text-wrap">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea
          </span>
        </div>
        <div className="relative h-[200px] w-full">
          <Image src="/assets/Images/blog-image.png" alt="blog" fill />
        </div>
      </div>
      <div className="flex gap-3 mt-4">
        <Button
          text="UI/UX"
          classname="bg-[#F5F5F5] hover:bg-[#dfdddd] text-gray px-5 rounded-lg py-1"
        />
      </div>
    </div>
  );
};

export default BlogCard;
