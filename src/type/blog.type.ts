export type Author = {
  _id: string;
  name: string;
  email: string;
  image: string;
  role: string;
};

export type Blog = {
  _id: string;
  image: string;
  title: string;
  description: string;
  author: Author;
  isPending: boolean;
  tags: string[];
  likes: number;
  relatedBlogs: any[];
  skills: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type BlogArray = Blog[];
