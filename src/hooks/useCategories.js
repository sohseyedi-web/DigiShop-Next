import { useQuery } from "@tanstack/react-query";
import { getCategory, getCategoryById } from "@/services/categoryServices";

export const useGetCategories = () =>
  useQuery({
    queryKey: ["get-categories"],
    queryFn: getCategory,
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useGetCategoryById = (id) =>
  useQuery({
    queryKey: ["get-categories", id],
    queryFn: () => getCategoryById(id),
    retry: false,
    refetchOnWindowFocus: true,
  });
