"use client";
import BlogCard from "@/components/BlogCard/blog-card";
import FilterBlog from "@/components/FilterBlog/filter-blog";
import NavigationBar from "@/components/NavigationBar/navigation-bar";
import { useGetAllBlogsQuery } from "@/lib/redux/slices/blog-api";
import Image from "next/image";
const Blog = () => {
  const { data, error, isLoading } = useGetAllBlogsQuery();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  console.log(data, "data");

  return (
    <div className="flex flex-col gap-10">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-2">
        <h1 className="col-span-1 font-bold text-lg px-3 md:px-16 text-center md:text-left ">
          Blog
        </h1>
        <div className="col-span-2">
          <FilterBlog />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        {data?.map((blog) => (
          <BlogCard {...blog} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
