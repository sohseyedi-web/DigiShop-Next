import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getCategory,
  getCategoryById,
  addNewCategory,
} from "@/services/categoryServices";
import { toast } from "react-hot-toast";

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

export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: addCategory, isPending: isCreating } = useMutation({
    mutationFn: addNewCategory,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["get-categories"],
      });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { addCategory, isCreating };
};
