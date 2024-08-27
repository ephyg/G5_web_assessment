import Image from "next/image";
import React from "react";
import Avatar from "../Avatar/avatar";
import Button from "../Button/button";

const RelatedBlogCard = () => {
  return (
    <div className=" w-[400px] shadow-lg rounded-lg">
      <Image
        src="/assets/Images/blog-image.png"
        alt="blog-image"
        className="object-cover"
        width={400}
        height={300}
      />
      <div className="w-full px-3 md:px-5">
        <h1 className="text-lg text-gray mt-4">
          Design Liberalized Exchange Rate Management
        </h1>
        <div className="flex text-sm gap-2 mt-4">
          <Avatar classname="w-[30px] h-[30px]" />
          <div className="flex items-center gap-2">
            <span className="text-gray font-thin ">by</span>
            <div className="h-[14px] bg-gray w-[1px]">
              <span className=""></span>
            </div>
            <span className="text-gray font-bold">Fred Boone</span>
            <span className="text-gray font-thin ">Jan 10, 2020</span>
          </div>
        </div>
        <div className="flex gap-4 my-5">
          <Button
            text="UI/UX"
            classname="bg-[#F5F5F5] hover:bg-[#dfdddd] text-gray px-5 rounded-lg py-1"
          />
        </div>
        <p className="text-gray text-base pb-4 border-b border-[#ebeaea]">
          A little personality goes a long way, especially on a business blog.
          So don’t be afraid to let loose.
        </p>
        <div className="flex justify-between py-5">
          <div className="flex gap-2 items-center">
            <Image
              src="/assets/Icons/message.svg"
              alt="message"
              width={20}
              height={20}
            />
            <span className="text-gray font-semibold">2.3k Likes</span>
          </div>
          <span className="text-blue-light font-semibold">Read More</span>
        </div>
      </div>
    </div>
  );
};

export default RelatedBlogCard;
