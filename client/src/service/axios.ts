import axios from "axios";
import { errorToast } from "../utils/toastUtils";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10_000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const res = error?.response;
    if (!res?.status) {
      errorToast("مشکلی در ارتباط با سمت سرور وجود دارد");
    } else if (res.status >= 500) {
      errorToast(`مشکلی از سمت سرور رخ داده است. ${res.status}`);
    } else if (res.status === 401) {
      errorToast("ورود غیرمجاز");
    } else if (res.status === 403) {
      errorToast("شما مجاز به دسترسی نیستید");
    } else if (res.status === 400) {
      errorToast(`در ورود اطلاعات دقت کنید ${res.status}`);
    } else if (res.status > 201) {
      const message = res?.data?.message || "در ورود اطلاعات دقت کنید";
      errorToast(message);
    }
    return Promise.reject(error);
  }
);
