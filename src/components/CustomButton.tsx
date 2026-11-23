import React from "react";

const variants = {
  red: "text-[#F9105E] bg-white border-[#F9105E] shadow-[2px_2px_0px_#F9105E]",
  green: "text-white bg-[#329537] border-black shadow-[2px_2px_0px_#000000]",
} as const;

type CustomButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  name: string;
  variant?: keyof typeof variants;
};

const CustomButton = ({
  name,
  loading,
  disabled,
  className = "",
  variant = "green",
}: CustomButtonProps) => {
  return (
    <button
      disabled={loading || disabled}
      className={`${className} w-fit px-1.5 py-1 font-bold text-[15px] ${variants[variant]} border rounded-md`}
    >
      {name}
    </button>
  );
};

export default CustomButton;
