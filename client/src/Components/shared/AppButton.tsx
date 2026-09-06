import type { ComponentProps } from "react";

const AppButton = ({ title, className }: ComponentProps<"button">) => {
  return (
    <button
      className={`!mt-2 py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${className}`}
    >
      {title || "ثبت"}
    </button>
  );
};

export default AppButton;
