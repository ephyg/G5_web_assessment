import Avatar from "@/components/Avatar/avatar";
import RelatedBlogCard from "@/components/RelatedBlogCard/related-blog-card";
import Image from "next/image";
import React from "react";

const BlogDetail = () => {
  return (
    <div className="flex flex-col items-center px-5 md:px-32">
      <h1 className="text-3xl mb-2">
        The essential guide to Competitive Programming
      </h1>
      <div className="flex items-center gap-4">
        <span className="text-gray font-thin text-base ">
        \u003Cp\u003EANother blog being added\u003C/p\u003E
        </span>
        <div className="h-[14px] bg-gray w-[1px]">
          <span className=""></span>
        </div>
        <span className="text-gray font-thin text-base ">6 min Read</span>
      </div>
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden mt-5 md:mt-10">
        <Image
          src="/assets/Images/blog-image.png"
          fill
          alt="blog-image"
          className="object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-col gap-1 justify-center items-center mt-5 md:mt-10">
        <Avatar classname="w-[70px] h-[70px]" />
        <div className="flex items-center gap-4">
          <span className="text-gray font-thin text-base ">chaltu kebede</span>
          <div className="h-[14px] bg-gray w-[1px]">
            <span className=""></span>
          </div>
          <span className="text-gray font-thin text-base ">
            software engineer
          </span>
        </div>
        <span className="text-blue font-semibold">@chaltu_kebede</span>
      </div>
      <div className="md:px-10 mt-5 md:mt-10">
        <p>
          We know that data structure and algorithm can seem hard at first
          glance. And you may not be familiar with advanced algorithms, but
          there are simple steps you can follow to see outstanding results in a
          short period of time.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="w-full mt-8 md:mt-16">
        <h1 className="font-bold text-lg w-full mb-4">Related Blogs</h1>
        <div className="">
          <RelatedBlogCard />
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
