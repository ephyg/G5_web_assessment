import BlogCard from "@/components/BlogCard/blog-card";
import FilterBlog from "@/components/FilterBlog/filter-blog";
import NavigationBar from "@/components/NavigationBar/navigation-bar";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-2">
        <h1 className="col-span-1 font-bold text-lg px-3 md:px-16 text-center md:text-left ">Blog</h1>
        <div className="col-span-2">
          <FilterBlog />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <BlogCard />
      </div>
    </div>
  );
};

export default Blog;
