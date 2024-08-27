import Image from "next/image";
import React from "react";
import Button from "../Button/button";

const Footer = () => {
  return (
    <div className="flex flex-col w-full items-center mt-10 md:mt-20 ">
      <div className="border-t border-b border-[#b9b9b9] flex flex-col md:flex-row flex-wrap gap-5 md:justify-between max-w-7xl px-5 7xl:px-0 w-full py-10">
        <div className="relative h-[150px] w-[200px] md:h-[220px] md:w-[290px]">
          <Image
            src="/assets/Images/footer-image.png"
            alt="footer-image"
            fill
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col text-black font-bold">
            <p>Get involved in improving tech </p>
            <p>education in Africa</p>
          </div>
          <Button
            text="Support Us"
            classname="bg-blue text-white py-2 md:py-2 rounded-lg max-w-40"
          />
        </div>
        <div className="">
          <h1 className="text-black font-semibold">Links</h1>
          <ul>
            <li className="text-[#535353]">Home</li>
            <li className="text-[#535353]">Success Stories</li>
            <li className="text-[#535353]">About Us</li>
            <li className="text-[#535353]">Get Involved</li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-black font-semibold">Teams</h1>
          <ul>
            <li className="text-[#535353]">Board Members</li>
            <li className="text-[#535353]">Advisors/Mentors</li>
            <li className="text-[#535353]">Executives</li>
            <li className="text-[#535353]">Staffs</li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-black font-semibold">Blogs</h1>
          <ul>
            <li className="text-[#535353]">Recent Blogs</li>
            <li className="text-[#535353]">New Blog</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap gap-5 md:justify-between max-w-7xl px-5 7xl:px-0 w-full py-5">
        <div className="">
          2020 Africa to Silicon Valley, Inc. All right reserved.
        </div>
        <div className="">
          <ul className="flex gap-10">
            <li className="relative w-[24px] h-[24px]">
              <Image alt="twitter" src="/assets/Icons/twitter.svg" fill />
            </li>
            <li className="relative w-[24px] h-[24px]">
              <Image alt="facebook" src="/assets/Icons/facebook.svg" fill />
            </li>
            <li className="relative w-[24px] h-[24px]">
              <Image alt="instagram" src="/assets/Icons/instagram.svg" fill />
            </li>
            <li className="relative w-[24px] h-[24px]">
              <Image alt="linkedin" src="/assets/Icons/linkedin.svg" fill />
            </li>
            {/* youtube */}
            <li className="relative w-[24px] h-[24px]">
              <Image alt="youtube" src="/assets/Icons/youtube.svg" fill />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
