import { toast, type ToastIcon, type ToastOptions, type ToastPosition } from "react-toastify";
import { Check, X } from "lucide-react";

type ToastType = ToastOptions["type"];

type SetToastOptions = {
  message: string;
  type?: ToastType;
  icon?: ToastIcon;
  position?: ToastPosition;
  options?: ToastOptions;
};


export const setToast = ({
  message,
  type = "default",
  icon,
  position = "bottom-right",
  options,
}: SetToastOptions) => {
  toast(message, {
    type,
    icon,
    position,
    ...options,
  });
};


export const successToast = (message: string = "عملیات با موفقیت انجام شد")=>{
    setToast({message, type: "success", icon: Check })
}

export const errorToast = (message: string = " عملیات ناموفق بود")=>{
    setToast({message, type: "error", icon: X})
}