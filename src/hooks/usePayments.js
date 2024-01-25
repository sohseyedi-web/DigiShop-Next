import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllPayments, getPaymentById } from "@/services/paymentsServices";
import { createPayment } from "@/services/paymentsServices";
import { toast } from "react-hot-toast";

export const usePayments = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["payments"],
    queryFn: getAllPayments,
    retry: false,
  });

  const { payments } = data || {};

  return { isLoading, payments };
};

export const useGetPaymentById = (id) =>
  useQuery({
    queryKey: ["payments", id],
    queryFn: () => getPaymentById(id),
    retry: false,
    refetchOnWindowFocus: true,
  });

export const useCreatePayment = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: addPayment, isPending } = useMutation({
    mutationFn: createPayment,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["payments"],
      });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { addPayment, isPending };
};
