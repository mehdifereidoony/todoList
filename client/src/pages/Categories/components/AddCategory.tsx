import AppModal from "@/Components/common/AppModal";
import AppButton from "@/Components/shared/AppButton";
import AppInput from "@/Components/shared/AppInput";
import {
  addCategoryService,
  updateCategoryService,
} from "@/service/categoryService";
import type { Category, categoryFields } from "@/types/category";
import { successToast } from "@/utils/toastUtils";
import type { Dispatch } from "@reduxjs/toolkit";
import {
  useEffect,
  useState,
  type SetStateAction,
  type SubmitEvent,
} from "react";

const initialValues = {
  title: "",
  description: "",
  icon: "icon",
  userId: "1",
};

const AddCategory = ({
  updateCategories,
  selectedUpdateCategory,
  setSelectedUpdateCategory,
  isOpen,
  setIsOpen,
}: {
  updateCategories: (category: Category) => void;
  selectedUpdateCategory: Category;
  setSelectedUpdateCategory: (value: Category | null) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const [values, setValues] = useState<categoryFields>(initialValues);

  useEffect(() => {
    setValues(selectedUpdateCategory || initialValues);
  }, [selectedUpdateCategory]);

  const handleSubmitForm = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = selectedUpdateCategory
      ? await updateCategoryService(selectedUpdateCategory.id, values)
      : await addCategoryService(values);
    if (res.status === 201 || res.status === 200) {
      successToast(
        res.status === 201
          ? "دسته جدید با موفقیت ایجاد شد"
          : "دسته بندی با موفقیت ویرایش شد"
      );
      updateCategories(res.data);
      setIsOpen(false);
      setValues(initialValues);
    }
  };
  return (
    <AppModal
      triggerTitle="افزودن دسته بندی +"
      triggerOnClick={() => setSelectedUpdateCategory(null)}
      dialogTitle={
        selectedUpdateCategory ? "ویرایش دسته بندی" : "افزودن دسته بندی"
      }
      isOpen={isOpen}
      changeIsOpen={setIsOpen}
    >
      <form
        onSubmit={(e) => handleSubmitForm(e)}
        className="flex flex-col justify-center w-full mx-auto px-4 space-y-6"
      >
        <AppInput
          label="عنوان"
          type="text"
          id="title"
          value={values.title}
          onChange={(e) => setValues({ ...values, title: e.target.value })}
          placeholder="عنوان را وارد کنید"
        />

        <AppInput
          label="توضیحات"
          type="text"
          id="description"
          value={values.description}
          onChange={(e) =>
            setValues({ ...values, description: e.target.value })
          }
          placeholder="توضیحات"
        />
        <div>
          <AppButton title="افزودن" type="submit" />
        </div>
      </form>
    </AppModal>
  );
};

export default AddCategory;
