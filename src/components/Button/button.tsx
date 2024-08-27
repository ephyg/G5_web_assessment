import React from "react";
interface ButtonProps {
  classname?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  text: string;
}
const Button = ({ text, classname, type, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${classname} hover:bg-[#183b8f]  font-semibold `}
    >
      {text}
    </button>
  );
};

export default Button;
