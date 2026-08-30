import type { AxiosResponse } from "axios";
import { api } from "./axios";
import type { Category } from "../types/category";

export const getCategoryService = (): Promise<AxiosResponse<Category[]>> => {
  return api.get("/taskCategories");
};
