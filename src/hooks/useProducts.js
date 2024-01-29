import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import {
  getProducts,
  getProductById,
  addNewProduct,
  removeProduct,
  updateProduct,
} from "@/services/productServices";
import { toast } from "react-hot-toast";

export const useGetProducts = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["get-products"],
    queryFn: getProducts,
    retry: false,
    refetchOnWindowFocus: true,
  });

  const { products } = data || {};

  return { isLoading, products };
};

export const useGetProductById = (id) => {
  const { data, isLoading } = useQuery({
    queryKey: ["get-products", id],
    queryFn: () => getProductById(id),
    retry: false,
    refetchOnWindowFocus: true,
  });

  const { product } = data || {};
  return { product, isLoading };
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: addProduct, isPending: isCreating } = useMutation({
    mutationFn: addNewProduct,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["get-products"],
      });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { addProduct, isCreating };
};

export const useRemoveProduct = () => {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutateAsync: removeProducts } = useMutation({
    mutationFn: removeProduct,
    onSuccess: () => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["get-products"],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isDeleting, removeProducts };
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: updateProducts, isPending: isUpdating } = useMutation({
    mutationFn: updateProduct,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["get-products"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { isUpdating, updateProducts };
};
