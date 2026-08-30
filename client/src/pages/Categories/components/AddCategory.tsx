import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { addCategoryService } from "@/service/categoryService";
import type { Category, categoryFields } from "@/types/category";
import { successToast } from "@/utils/toastUtils";
import { useState, type SubmitEvent } from "react";
import { useSelector } from "react-redux";

const AddCategory = ({
  updateCategories,
}: {
  updateCategories: (category: Category) => void;
}) => {
  const [values, setValues] = useState<categoryFields>({
    title: "",
    description: "",
    icon: "icon",
    userId: "1",
  });
  const handleSubmitForm = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await addCategoryService(values);
    if (res.status === 201) {
      successToast("دسته جدید با موفقیت ایجاد شد");
      updateCategories(res.data);
    }
  };
  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700">
        افزودن دسته بندی +
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>افزودن دسته بندی</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={(e) => handleSubmitForm(e)}
          className="flex flex-col justify-center w-full mx-auto px-4 space-y-6"
        >
          <div>
            <label
              htmlFor="full-name-small"
              className="mb-2 text-slate-900 dark:text-slate-50 font-medium text-sm inline-block"
            >
              عنوان
            </label>
            <input
              type="text"
              id="title"
              value={values.title}
              onChange={(e) => setValues({ ...values, title: e.target.value })}
              placeholder="عنوان را وارد کنید"
              className="px-2.5 py-2 text-sm text-slate-900 dark:text-slate-50 rounded-md bg-white dark:bg-neutral-800 w-full outline-1 -outline-offset-1 outline-slate-300 dark:outline-neutral-700 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
            />
          </div>

          <div>
            <label
              htmlFor="full-name-base"
              className="mb-2 text-slate-900 dark:text-slate-50 font-medium text-sm inline-block"
            >
              توضیحات
            </label>
            <input
              type="text"
              id="description"
              value={values.description}
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
              placeholder="توضیحات"
              className="px-3 py-2.5 text-sm text-slate-900 dark:text-slate-50 rounded-md bg-white dark:bg-neutral-800 w-full outline-1 -outline-offset-1 outline-slate-300 dark:outline-neutral-700 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
            />
          </div>

          <div>
            <button
              type="submit"
              className="!mt-2 py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              افزودن
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddCategory;
