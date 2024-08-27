import { Blog, BlogArray } from "@/type/blog.type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { get } from "http";
export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  }),
  endpoints: (builder) => ({
    getAllBlogs: builder.query<BlogArray, void>({
      query: () => "/blogs",
    }),
    getBlogById: builder.query<Blog, string>({
      query: (id) => `blogs/${id}`,
    }),
  }),
});

export const { useGetAllBlogsQuery } = blogApi;
