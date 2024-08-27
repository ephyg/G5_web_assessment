import BlogCard from "@/components/BlogCard/blog-card";
import FilterBlog from "@/components/FilterBlog/filter-blog";
import NavigationBar from "@/components/NavigationBar/navigation-bar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <FilterBlog />
      <BlogCard />
    </div>
  );
}
