import Image from "next/image";
import React from "react";
interface AvatarProps {
  src?: string;
  classname?: string;
}
const Avatar = ({ classname }: AvatarProps) => {
  return (
    <div className={`${classname} relative  rounded-full`}>
      <Image
        src="/assets/Images/blog-image.png"
        alt=""
        fill
        className="rounded-full"
      />
    </div>
  );
};

export default Avatar;
