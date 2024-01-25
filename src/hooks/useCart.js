import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCart, removeFromCart } from "@/services/cartServices";
import { toast } from "react-hot-toast";

export const useAddToCart = () => {
  const queryClient = useQueryClient();
  const { isPending: isAdding, mutateAsync: addCart } = useMutation({
    mutationFn: addToCart,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["get-user"],
      });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { isAdding, addCart };
};

export const useRemoveCart = () => {
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutateAsync: removeCart } = useMutation({
    mutationFn: removeFromCart,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["get-user"],
      });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { isDeleting, removeCart };
};
