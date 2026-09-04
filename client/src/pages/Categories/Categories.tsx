import { useEffect, useState } from "react";
import {
  deleteCategoryService,
  getCategoryService,
} from "../../service/categoryService";
import type { Category } from "../../types/category";
import type { AxiosResponse } from "axios";
import AddCategory from "./components/addCategory";
import { Button } from "@/components/ui/button";
import AppAlert from "@/Components/common/AppAlert";
import { successToast } from "@/utils/toastUtils";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [deleting, setDeleting] = useState(false);

  const getCategories = async () => {
    try {
      setIsLoading(true);

      const res: AxiosResponse<Category[]> = await getCategoryService();

      setCategories(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    const currentId = selectedCategory?.id;
    if (!currentId) {
      return;
    }
    const res = await deleteCategoryService(currentId);
    if (res.status == 200) {
      setDeleteDialogOpen(false);
      successToast("دسته با موفقیت حذف شد.");
      setCategories((categories) =>
        categories.filter((category) => category.id !== currentId)
      );
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  //delete functionality
  const openDeleteDialog = (category: Category) => {
    setDeleteDialogOpen(true);
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-full p-6 text-gray-800 dark:text-gray-100">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">دسته‌بندی‌ها</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            مدیریت دسته‌بندی‌های پروژه
          </p>
        </div>

        <AddCategory
          updateCategories={(category) =>
            setCategories([...categories, category])
          }
        />
      </div>

      {/* Table Container */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
        <div className="overflow-x-auto">
          <table className="w-full text-right text-sm">
            <thead className="border-b border-gray-200 bg-gray-50 text-gray-600 dark:border-gray-700 dark:bg-gray-900/50 dark:text-gray-300">
              <tr>
                <th className="px-6 py-4 font-semibold">عنوان</th>
                <th className="px-6 py-4 font-semibold">توضیحات</th>
                <th className="px-6 py-4 font-semibold">آیکون</th>
                <th className="px-6 py-4 font-semibold">شناسه کاربر</th>
                <th className="px-6 py-4 text-center font-semibold">عملیات</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {isLoading ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-10 text-center text-gray-500 dark:text-gray-400"
                  >
                    در حال دریافت اطلاعات...
                  </td>
                </tr>
              ) : categories.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-10 text-center text-gray-500 dark:text-gray-400"
                  >
                    دسته‌بندی‌ای پیدا نشد.
                  </td>
                </tr>
              ) : (
                categories.map((category) => (
                  <tr
                    key={category.id}
                    className="transition hover:bg-gray-50 dark:hover:bg-gray-700/40"
                  >
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {category.title}
                    </td>

                    <td className="max-w-xs truncate px-6 py-4 text-gray-600 dark:text-gray-300">
                      {category.description || "-"}
                    </td>

                    <td className="px-6 py-4">{category.icon || "-"}</td>

                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400">
                      {category.userId}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-2">
                        <button
                          type="button"
                          className="cursor-pointer rounded-md px-3 py-1.5 text-xs font-medium text-blue-600 transition hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-950/40"
                        >
                          ویرایش
                        </button>
                        <Button
                          variant="destructive"
                          onClick={() => openDeleteDialog(category)}
                          className="cursor-pointer"
                        >
                          حذف
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <AppAlert
        alertDialogTitle={`آیا از حذف ${selectedCategory?.title || ""} مطمئنی؟`}
        alertDialogCancel="نه. دستم خورد!"
        alertDialogAction="آره"
        open={deleteDialogOpen}
        changeOpen={setDeleteDialogOpen}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Categories;
