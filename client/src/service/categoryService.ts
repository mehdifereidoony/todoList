import type { Category } from "../types/category";

export const getCategoryService = async (): Promise<Category[]> => {
  const response = await fetch("http://localhost:3000/taskCategories");

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data: Category[] = await response.json();

  return data;
};