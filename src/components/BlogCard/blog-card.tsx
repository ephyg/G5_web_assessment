import React from "react";
import Avatar from "../Avatar/avatar";
import Image from "next/image";
import Button from "../Button/button";
import { Blog } from "@/type/blog.type";
import { useRouter } from "next/navigation";
const BlogCard = (blog: Blog) => {
  const router = useRouter();

  const {
    _id,
    image,
    title,
    description,
    author,
    isPending,
    tags,
    likes,
    relatedBlogs,
    skills,
    createdAt,
    updatedAt,
    __v,
  } = blog;
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const day = date.getUTCDate();
    const month = monthNames[date.getUTCMonth()];
    const year = date.getUTCFullYear();

    return `${month} ${day}, ${year}`;
  };
  const handleOnclick = () => {
    router.push(`/blog/${_id}`);
  };

  return (
    <div
      className="flex flex-col px-5 lg:px-40 font-montserrat cursor-pointer"
      onClick={handleOnclick}
    >
      <div className="flex items-center gap-4  border-t border-[#dfdddd] pt-5">
        <Avatar classname="w-[70px] h-[70px]" src={image} />
        <div className="flex flex-col gap-2">
          <div className="flex gap-3 items-center">
            <h1 className="text-black font-bold">{author?.name}</h1>
            <div className="h-1 w-1 rounded-full bg-gray"></div>
            <span className="text-gray text-sm">{formatDate(updatedAt)}</span>
          </div>
          <span className="text-gray text-sm">SOFTWARE ENGINEER</span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-10 justify-between">
        <div className="flex flex-col gap-2">
          <span className="font-bold text-xl text-wrap w-full md:w-4/5">
            {title}
          </span>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <div className="relative h-[200px] max-w-[500px] w-full">
          <Image src="/assets/Images/blog-image.png" alt="blog" fill />
        </div>
      </div>
      <div className="flex gap-3 mt-4">
        {tags?.map((tag,index) => (
          <Button
          key={index}
            text={tag}
            classname="bg-[#F5F5F5] hover:bg-[#dfdddd] text-gray px-5 rounded-lg py-1"
          />
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
