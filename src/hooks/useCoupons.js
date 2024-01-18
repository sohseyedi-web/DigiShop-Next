import {
  addNewCoupon,
  deleteCoupon,
  getAllCoupns,
  getOneCoupon,
  updateCoupon,
} from "@/services/couponService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetCoupons = () =>
  useQuery({
    queryKey: ["get-coupons"],
    queryFn: getAllCoupns,
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useGetOneCoupon = (id) =>
  useQuery({
    queryKey: ["get-coupon", id],
    queryFn: () => getOneCoupon(id),
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useCreateCoupon = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: addCoupon, isPending: isCreating } = useMutation({
    mutationFn: addNewCoupon,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["get-coupons"],
      });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { addCoupon, isCreating };
};

export const useRemoveCoupons = () => {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutateAsync: removeCoupons } = useMutation({
    mutationFn: deleteCoupon,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["get-coupons"],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isDeleting, removeCoupons };
};

export const useUpdateCoupon = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: updateCoupons, isPending: isUpdating } = useMutation({
    mutationFn: updateCoupon,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["get-coupons"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { isUpdating, updateCoupons };
};
