import type { AxiosResponse } from "axios";
import { api } from "./axios";
import type { Category, categoryFields } from "../types/category";

export const getCategoryService = (): Promise<AxiosResponse<Category[]>> => {
  return api.get("/taskCategories");
};

export const addCategoryService = (
  data: categoryFields
): Promise<AxiosResponse<any>> => {
  return api.post("/taskCategories", data);
};

export const deleteCategoryService = (id: string) => {
  return api.delete(`/taskCategories/${id}`);
};
