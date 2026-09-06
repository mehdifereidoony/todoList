import type { AppInputProps } from "@/types/components.types";
import { useId } from "react";

const AppInput = ({ label, id, className, ...rest }: AppInputProps) => {
  const generatedId = useId();
  const mainId = id || generatedId;
  return (
    <div>
      <label
        htmlFor={mainId}
        className="mb-2 text-slate-900 dark:text-slate-50 font-medium text-sm inline-block"
      >
        {label || ""}
      </label>
      <input
        id={mainId}
        className={`px-2.5 py-2 text-sm text-slate-900 dark:text-slate-50 rounded-md bg-white dark:bg-neutral-800 w-full outline-1 -outline-offset-1 outline-slate-300 dark:outline-neutral-700 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 ${
          className || ""
        }`}
        {...rest}
      />
    </div>
  );
};

export default AppInput;
