import AppModal from "@/Components/common/AppModal";
import AppButton from "@/Components/shared/AppButton";
import AppInput from "@/Components/shared/AppInput";
import { addCategoryService } from "@/service/categoryService";
import type { Category, categoryFields } from "@/types/category";
import { successToast } from "@/utils/toastUtils";
import { useState, type SubmitEvent } from "react";

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
    <AppModal triggerTitle="افزودن دسته بندی +" dialogTitle="افزودن دسته بندی">
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
